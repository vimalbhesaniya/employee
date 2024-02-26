import Lottie from "lottie-react";
import { React, CSSProperties } from "react";
import animatLogo from "./assets/Animation - 1708684599176.json"
import { HashLoader } from "react-spinners";
import gif from "./assets/jobduniya (1).gif"
import spinner from "../src/spinner.module.css"

const Spinner = () => {
  return (
    <>
      <div className={spinner.spinner}>
      <img src={gif} alt="" style={{
            height:"400px", width:"400px" 
        }}  />
        {/* <Lottie animationData={animatLogo} style={{
            height:"100px", width:"100px" 
        }} ></Lottie> */}
      </div>
    </>
  );
};

export default Spinner;
