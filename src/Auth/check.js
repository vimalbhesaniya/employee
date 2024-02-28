<<<<<<< HEAD
=======
import Cookies from 'js-cookie';
import React, { useEffect, createContext , useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Check = () => {
    const navigate = useNavigate();
    const authProvider = createContext();
    useEffect(() => {
        const token = Cookies.get("token");
        if (token !== undefined && token !== null && token !== '') {
            navigate("/home");
        }else{
            navigate("/login");
        }
    }, [navigate]);
};

export default Check;
>>>>>>> ecd12fee99ade558821884b9c650c3afab8d4306
