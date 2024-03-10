import React, { useCallback, useContext, useState } from 'react'
import { EnableSpinner } from '../..'
import firebase from 'firebase/compat/app'
import "firebase/compat/storage"

const useFirestorage = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [setSpinnerState,spinner] = useContext(EnableSpinner)
    const Upload = useCallback((img , path , type) => {
        if (img) {
            const storageRef = firebase.storage().ref(path)
            const fileRef = storageRef.child(img)
            const metadata = {
                contentType: type,
              };
            setSpinnerState(true)
            fileRef.put(img,metadata)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL()
                        .then((downloadUrl) => {
                            if (downloadUrl) {
                                setImageUrl(downloadUrl)
                                setSpinnerState(false);
                                return downloadUrl
                                }
                        })
                })
        }
    }, []);
    return { Upload, imageUrl }
}

export default useFirestorage