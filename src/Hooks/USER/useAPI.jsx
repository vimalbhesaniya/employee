import Cookies from 'js-cookie'
import React, { useCallback, useContext } from 'react'
import { EnableSpinner } from '../..';
import { useState } from 'react'
const useAPI = () => {
    const [setSpinnerState] = useContext(EnableSpinner);
    const [data, setData] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);

    const postREQUEST = useCallback(async (PATH, BODY, HEADER) => {
        setSpinnerState(true);
        try {
            const RESPONSE = await fetch(`${process.env.REACT_APP_LOCAL_URL}${PATH}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": Cookies.get("token"),
                        ...HEADER
                    },
                    body: BODY,
                    method: "POST"
                })
            const data = await RESPONSE.json();
            if (data) {
                setSpinnerState(false);
            }
            setData(data);
            return data
        }
        catch (error) {
            setSpinnerState(false);
            setError(error);
            return error
        }
    }, [data, error, loading]);
    
    const getREQUEST = useCallback(async (PATH, BODY, HEADER) => {
        setSpinnerState(true);
        try {
            const RESPONSE = await fetch(`${process.env.REACT_APP_LOCAL_URL}${PATH}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": Cookies.get("token")
                    },
                    method: "GET"
                })
            const data = await RESPONSE.json();
            if (data) {
                setSpinnerState(false);
            }
            setData(data);
            return data
        }
        catch (error) {
            setSpinnerState(false);
            setError(error);
            return error
        }
    }, [data, error, loading]);
    
    
    const patchREQUEST = useCallback(async (PATH,COLLECTION_NAME  ,_id, COLUMNS ) => {
        try {
            const RESPONSE = await fetch(`${process.env.REACT_APP_LOCAL_URL}${PATH}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": Cookies.get("token")
                    },
                    method: "PATCH",
                    body:JSON.stringify({
                        COLLECTION_NAME,
                        COLUMNS,
                        _id
                    })
                })
            const data = await RESPONSE.json();
            setData(data);
            return data
        }
        catch (error) {
            setSpinnerState(false);
            setError(error);
            return error
        }
    }, [data, error, loading]);
    
    return {postREQUEST ,getREQUEST ,patchREQUEST }
}

export default useAPI


// const response = await fetch("http://localhost:5500/login", {
//                     body: JSON.stringify({ email, password }),
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 })