import React, { useMemo, useState } from "react";
import "../Style/login.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import ResetPassword from "./login/ResetPassword";
import NavbarBeforeLogin from "./login/NavbarBeforeLogin";
import Lottie from "lottie-react";
import FormContainer from "./FormContainer";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import InputText from "./signup/validateInputs";
import me from "../assets/me.json";
import Check from "../Auth/check";
import FormButton from "./FormButton";
const Login = () => {
  Check();
  const x = new Date();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [close, setClose] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = async () => {
    if (email.length >= 2 && password.length >= 2) {
      const response = await fetch("http://localhost:5500/login", {
        body: JSON.stringify({ email, password }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((e) => e.json())
        .catch((e) => {
          setErrorMessage(
            "Unable to connect to the server. Please make sure the server is running and try again."
          );
        });
      
      console.log(response);
      if (response?.result == "User  not found") {
        setProgress(70)
        setTimeout(() => {
          setProgress(100)
          setErrorMessage("Invalid credentials");
        }, 1000)
      }
      else {
        setErrorMessage("")
        setProgress(100);
        Cookies.set("token", response?.token, {
          expires: 7,
          path: "/",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000)
      }
    } else {
      setErrorMessage("Provide Email and Password");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <>
      <LoadingBar
        color="#23A6F0"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {close ? <ResetPassword  close={setClose} /> : ""}
      <NavbarBeforeLogin></NavbarBeforeLogin>
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
              No account yet? Time to <Link to={"/signup"}>Sign Up !</Link>
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

export default Login;
