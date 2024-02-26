import Cookies from 'js-cookie';
import React, { useEffect, createContext , useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Check = ({ Protected }) => {
    const navigate = useNavigate();
    const authProvider = createContext();
    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <>
                <Protected />
        </>
    );
};

export default Check;
