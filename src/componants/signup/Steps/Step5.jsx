import React, { useMemo, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import { isValidStep5 } from "../../../Auth/isValidate";

const Step5 = ({ setScreen }) => {
  const lottie = (
    <Lottie
      animationData={me}
      loop={true}
      style={{ height: "100%", width: "100%" }}
    />
  );

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDateWork, setStartDateWork] = useState("");
  const [endDateWork, setEndDateWork] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [achievements, setAchievements] = useState("");
 const [isHaveExperience , setIsHaveExperience] = useState(false)

  const isValidateStep5 = useMemo(() => isValidStep5(jobTitle , companyName , startDateWork , endDateWork , responsibilities , achievements ), [jobTitle , companyName , startDateWork , endDateWork , responsibilities , achievements]);
  return (
    <FormContainer
      heading={"Sign Up"}
      leftSection={lottie}
      title={
        <>
          <div className="flexCheckbox">
		  <input  type="checkbox" onClick={()=>setIsHaveExperience(!isHaveExperience)}  /> I don't have an any experience.
          </div>
        </>
      }
	  navigat={
        <p className="--navLink">
          Already have an account : <Link to={"/login"}>Login !</Link>
        </p>
      }
      slogan={
        <Stepper
          style={{ color: "#001f3f" }}
          steps={[{}, {}, {}, {}, {}, {}]}
          activeStep={4}
        />
      }
      textbox1={
        <InputText
          onChange={(e) => setJobTitle(e)}
          id="JobTitle"
          inputType={"text"}
          placeHolder={"Job Title*"}
          require={true}
        />
      }
      textbox2={
        <InputText
          id="CompanyName"
          onChange={(e) => setCompanyName(e)}
          inputType={"text"}
          placeHolder={"Company Name*"}
          require={true}
        />
      }
      textbox4={
        <InputText
          onChange={(e) => setStartDateWork(e)}
          id="StartDate"
          inputType={"date"}
          require={true}
          label={"Start date*"}
        />
      }
      textbox5={
        <InputText
          id="EndDate"
          onChange={(e) => setEndDateWork(e)}
          inputType={"date"}
          require={true}
          label={"End date*"}
        />
      }
      textbox7={
        <InputText
          id="Responsibilities"
          inputType={"text"}
          onChange={(e) => setResponsibilities(e)}
          placeHolder={"Responsibilities*"}
          require={false}
        />
      }
      textbox8={
        <InputText
          id="Achievements"
          inputType={"text"}
          placeHolder={"Achievements*"}
          onChange={(e) => setAchievements(e)}
          require={false}
        />
      }
      button1={
        <FormButton
          className={"--btn"}
          text={"back"}
          onClick={() => setScreen("step4")}
        />
      }
      button2={
        <FormButton
          className={isHaveExperience === isValidateStep5 ? "--btnDisabled" : "--btn"}
          isDisabled={isHaveExperience ? isValidateStep5 : !isValidateStep5} 
          text={"Next"}
          onClick={() => {
            setScreen("step6");
          }}
        />
      }
    />
  );
};

export default Step5;
