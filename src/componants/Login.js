import React, { useCallback, useMemo, useEffect, useState } from "react";
import "../Style/login.css";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import LoginAsCompany from "../CompanySide/components/LoginAsCompany";
import Check from "../Auth/check";
import LoginAsUser from "../UserSide/LoginAsUser";
import Cookies from "js-cookie";
import NotFound from "./Notfound";

const Login = () => {
    
    const [progress, setProgress] = useState(0);
    const [loginScreen, setLoginScreen] = useState("user");
    const naviget = useNavigate();
    const token = Cookies.get("token");
    const yes = token ? true : false;
    useEffect(() => {
        if (token){
            naviget("/home");
        } 
    })
    return (
        <>
            {token?<NotFound></NotFound>:""}
            {loginScreen == "user" ? (
                <LoginAsUser
                    setProgress={setProgress}
                    setLoginScreen={setLoginScreen}
                    loginScreen={loginScreen}
                />
            ) : (
                ""
            )}
            {loginScreen == "company" ? (
                <LoginAsCompany
                    setLoginScreen={setLoginScreen}
                    loginScreen={loginScreen}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default Login;
