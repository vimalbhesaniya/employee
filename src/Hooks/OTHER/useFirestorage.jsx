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
            fileRef.put(img,metadata)
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

    const handleDelete = useCallback((fileName, path) => {
        const storageRef = firebase.storage().ref(path);
        const fileRef = storageRef.child(fileName);
        fileRef.delete().then(() => {
            console.log('File deleted successfully');
        }).catch((error) => {
            console.error('Error deleting file: ', error);
        });
    }, []);

    const handleUpdate = useCallback((fileName, updatedFile, path) => {
        const storageRef = firebase.storage().ref(path);
        const fileRef = storageRef.child(fileName);
        fileRef.put(Date.now()+"_"+`${updatedFile}`).then((snapshot) => {
            snapshot.ref.getDownloadURL()
                .then((downloadUrl) => {
                    if (downloadUrl) {
                        setImageUrl(downloadUrl)
                        setSpinnerState(false);
                    }
                })
        }).catch((error) => {
            console.error('Error updating file: ', error);
        });
    },[]);

    return { imageUrl, Upload, handleDelete, handleUpdate }
}

export default useFirestorage