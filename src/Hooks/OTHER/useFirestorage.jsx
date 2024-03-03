import React, { useCallback, useContext, useState } from 'react'
import { EnableSpinner } from '../..'
import firebase from 'firebase/compat/app'
import "firebase/compat/storage"

const useFirestorage = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [setSpinnerState,spinner] = useContext(EnableSpinner)
    const Upload = useCallback((img) => {
        if (img) {
            const storageRef = firebase.storage().ref('/userprofiles')
            const fileRef = storageRef.child(img.name)
            setSpinnerState(true)
            fileRef.put(img)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL()
                        .then((downloadUrl) => {
                            if (downloadUrl) {
                                setImageUrl(downloadUrl)
                                setSpinnerState(false);
                            }
                        })
                })
        }
    }, []);
    return { Upload, imageUrl }
}

export default useFirestorage