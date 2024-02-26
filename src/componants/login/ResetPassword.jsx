import React, { useCallback, useState } from "react";
import "./ResetPassword.css";
import css from "../../Style/inputBoxs.module.css";

<<<<<<< HEAD
const ResetPassword = ({close , mail, otpassword  , newpassword}) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
=======
const ResetPassword = ({ close  }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
>>>>>>> 1a9b1ee7db0e607012318451be98ee9abd93385b
  const [step, setStep] = useState(1); // 1: Email input, 2: OTP input, 3: New password input
  const [isClose, setIsClose] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = useCallback(() => {
    setIsClose(!isClose);
    close(isClose);
  }, [isClose]);

  const handleEmailSubmit =  async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    
    setStep(2);
    setMessage('');
=======
    const response = await fetch("http://localhost:5500/forgot", {
      body: JSON.stringify({ email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((e) => e.json());
    console.log(response);
    if (response.status) {
        alert(response.result.message)
        setStep(2);
        setMessage("");
    }
    else{
      alert(response.message)
    }
>>>>>>> 1a9b1ee7db0e607012318451be98ee9abd93385b
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5500/checkOTP", {
      body: JSON.stringify({ otp, email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((e) => e.json());
    if (!response.success) {
      setMessage("OTP is Not valid");
    }
    else{
      setStep(3);
      setMessage("You can change the password");
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    // Implement password reset logic here (server-side logic in a real app).
    // For this example, let's assume the password is successfully reset.
    const response = await fetch("http://localhost:5500/changePwd", {
      body: JSON.stringify({ email, password }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((e) => e.json());
    if (response.success) {
      setMessage("Password reset successfully!");
      close(false)
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-popup">
        <button className="close-button" onClick={() => handleClose()}>
          x
        </button>
        <div className="popup-content">
          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                className={"Finput"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="Fbutton">
                Submit
              </button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleOtpSubmit}>
              <label>OTP:</label>
              <input
                type="text"
                value={otp}
                className={"Finput"}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button type="submit" className="Fbutton">
                Submit
              </button>
            </form>
          )}
          {step === 3 && (
            <form onSubmit={handlePasswordReset}>
              <label>New Password:</label>
              <input
                type="password"
                className={"Finput"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="Fbutton">
                Reset Password
              </button>
            </form>
          )}
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
