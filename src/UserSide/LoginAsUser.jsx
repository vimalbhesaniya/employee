import React, { useContext, useMemo, useState } from "react";
import FormButton from "../componants/FormButton";
import me from "../assets/me.json";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import FormContainer from "../componants/FormContainer";
import InputText from "../componants/signup/validateInputs";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import NavbarBeforeLogin from "../componants/login/NavbarBeforeLogin";
import ResetPassword from "../componants/login/ResetPassword";
import { EnableSpinner } from "..";

const LoginAsUser = ({ setProgress, setLoginScreen }) => {
    const x = new Date();
    const navigate = useNavigate();
    const setSpinnerState = useContext(EnableSpinner)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [close, setClose] = useState("");
    
    const handleSubmit = async () => {
        // navigate("/home")
        if (email.length >= 2 && password.length >= 2) {
            setSpinnerState(true);
            try {
                const response = await fetch("http://localhost:5500/login", {
                    body: JSON.stringify({ email, password }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const result = await response.json();
                if (result?.auth) {
                    setTimeout(() => {
                        Cookies.set("token" , result.token )
                        Cookies.set("userId" , result.id)
                        setSpinnerState(false)
                        navigate("/home")
                    } , 5000)
                }
                else{
                    setTimeout(()=>{
                        setErrorMessage(result.result)
                        setSpinnerState(false)
                    } , 2000)

                }
            } catch(e) {
                setSpinnerState(false)
                setErrorMessage( `${e}Something went wrong`);
            }
        }
        else {
            setErrorMessage("Provide Email and Password");
        }
    };

    const leftSection = (
        <div className="leftSectionHeader">
            <span>looking to hire ? </span>
            <span
                className="screentitle"
                onClick={() => setLoginScreen("company")}
            >
                {" "}
                Login as Company
            </span>
        </div>
    );


    return (
        <>
            {close ? <ResetPassword close={setClose} /> : ""}
            <NavbarBeforeLogin leftSection={leftSection} />
            <FormContainer
                warning={errorMessage}
                leftSection={
                    <Lottie
                        animationData={me}
                        loop={true}
                        style={{ height: "100%", width: "100%" }}
                    />
                }
                heading={"Sign In"}
                slogan={"Unlock Your Opportunities.Explore with Login !"}
                navigat={
                    <>
                        <p className="--navLink">
                            No account yet? Time to{" "}
                            <Link to={"/signup"}>Sign Up !</Link>
                        </p>
                    </>
                }
                textbox1={
                    <InputText
                        inputType={"email"}
                        placeHolder={"Email"}
                        onChange={(e) => setEmail(e)}
                    />
                }
                textbox2={
                    <InputText
                        inputType={"password"}
                        password={true}
                        placeHolder={"Password"}
                        onChange={(e) => setPassword(e)}
                    />
                }
                button2={
                    <FormButton
                        className={"--btn"}
                        text={"Login"}
                        onClick={() => handleSubmit()}
                    />
                }
                button1={
                    <FormButton
                        className={"--btn"}
                        text={"Forgot Password"}
                        onClick={() => setClose(true)}
                    />
                }
            />
        </>
    );
};

export default LoginAsUser;
