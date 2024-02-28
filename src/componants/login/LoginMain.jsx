// import React, { useCallback, useMemo, useEffect, useState } from "react";
// import "./login.css"
// import {  useNavigate } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";
// import LoginAsCompany from "../../CompanySide/components/LoginAsCompany"
// import LoginAsUser from "../../UserSide/LoginAsUser"
// import Cookies from "js-cookie";
// import ResetPassword from "./ResetPassword";
// import NavbarBeforeLogin from "./NavbarBeforeLogin";
// import NotFound from "../Notfound";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [close, setClose] = useState("");
//   const [progress, setProgress] = useState(0);
//   const [loginScreen, setLoginScreen] = useState("user");
//   const naviget = useNavigate();
//   const token = Cookies.get("token");
// //   useEffect(() => {
// //       if (token) {
// //       naviget("/home");
// //     }
// //   } , [])

//   const handleSubmit = async () => {
//     if (email.length >= 2 && password.length >= 2) {
//       const response = await fetch("http://localhost:5500/login", {
//         body: JSON.stringify({ email, password }),
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((e) => e.json())
//         .catch((e) => {
//           setErrorMessage(
//             "Unable to connect to the server. Please make sure the server is running and try again."
//           );
//         });

//       if (response?.result == "User  not found") {
//         setProgress(70)
//         setTimeout(() => {
//           setProgress(100)
//           setErrorMessage("Invalid credentials");
//         }, 1000)
//       }
//       else {
//         setErrorMessage("")
//         setProgress(100);
//         Cookies.set("token", response?.token, {
//           expires: 7,
//           path: "/",
//         });
//         setTimeout(() => {
//           navigate("/home");
//         }, 1000)
//       }
//     } else {
//       setErrorMessage("Provide Email and Password");
//       setTimeout(() => {
//         setErrorMessage("");
//       }, 3000);
//     }


//   return (
//     <>
//       <LoadingBar
//         color="#23A6F0"
//         progress={progress}
//         onLoaderFinished={() => setProgress(0)}
//       />
//       {close ? <ResetPassword close={setClose} /> : ""}
//       <NavbarBeforeLogin></NavbarBeforeLogin>
//       {/* <FormContainer
//         warning={errorMessage}
//         leftSection={
//           <Lottie
//             animationData={me}
//             loop={true}
//             style={{ height: "100%", width: "100%" }}
//           />
//         }
//         heading={"Sign In"}
//         slogan={"Unlock Your Opportunities.Explore with Login !"}
//         navigat={
//           <>
//             <p className="--navLink">
//               No account yet? Time to <Link to={"/signup"}>Sign Up !</Link>
//             </p>
//           </>
//         }
//         textbox1={
//           <InputText
//             inputType={"email"}
//             placeHolder={"Email"}
//             onChange={(e) => setEmail(e)}
//           />
//         }
//         textbox2={
//           <InputText
//             inputType={"password"}
//             password={true}
//             placeHolder={"Password"}
//             onChange={(e) => setPassword(e)}
//           />
//         }
//         button2={
//           <FormButton
//             className={"--btn"}
//             text={"Login"}
//             onClick={() => handleSubmit()}
//           />
//         }
//         button1={
//           <FormButton
//             className={"--btn"}
//             text={"Forgot Password"}
//             onClick={() => setClose(true)}
//           />
//         }
//       /> */}
//       {token ? <NotFound></NotFound> : ""}
//       {loginScreen === "user" ? (
//         <LoginAsUser
//           setProgress={setProgress}
//           setLoginScreen={setLoginScreen}
//           loginScreen={loginScreen}
//         />
//       ) : (
//         ""
//       )}
//       {loginScreen === "company" ? (
//         <LoginAsCompany
//           setLoginScreen={setLoginScreen}
//           loginScreen={loginScreen}
//         />
//       ) : (
//         ""
//       )}
//     </>
//   )};
// };

// export default Login;


import React, { useState  , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import LoginAsUser from "../../UserSide/LoginAsUser"
import LoginAsCompany from "../../CompanySide/components/LoginAsCompany"
import "../../Style/login.css"

const LoginMain = () => {
    const [screen ,setScreen] = useState("user")
    const naviget = useNavigate();
    useEffect(() => {   
        const token = Cookies.get("token");
        if (!token) {
            naviget("/login");
        }
    })
    return (
        <>
            {screen === "user" ? (
                <LoginAsUser
                    setScreen={setScreen}
                />
            ) : (
                ""
            )}
            {screen === "company" ? (
                <LoginAsCompany
                    setScreen={setScreen}
                />
            ) : (
                ""
            )}
        </>
    )
}

export default LoginMain