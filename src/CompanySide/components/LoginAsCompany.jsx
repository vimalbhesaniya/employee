import React, { useMemo, useState } from "react";
// import FormButton from "../componants/FormButton";
import me from "../../assets/companylogin.json"
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import InputText from "../../componants/signup/validateInputs";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import FormButton from "../../componants/Common/FormButton";
import FormContainer from "../../componants/Common/FormContainer";
import NavbarBeforeLogin from "../../componants/login/NavbarBeforeLogin";
import ResetPassword from "../../componants/login/ResetPassword";

const LoginAsCompany = ({ setScreen }) => {
  const x = new Date();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [close, setClose] = useState(false); 

  const handleSubmit = () =>{
    return false
  }

  const leftSection = (
    <div className="leftSectionHeader">
      <span>looking to Jobs ? </span>
      <span className="screentitle"  onClick={() => setScreen("user")}> Login as Seeker</span>
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
        heading={"Login As Company"}
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

export default LoginAsCompany;
