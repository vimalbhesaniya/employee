import React, { useCallback, useState } from 'react';
import './ResetPassword.css';
import css from "../../Style/inputBoxs.module.css"

const ResetPassword = ({close , mail, otpassword  , newpassword}) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Email input, 2: OTP input, 3: New password input
  const [isClose, setIsClose] = useState(false);
  const [message ,setMessage] = useState("")

  const handleClose = useCallback(()=>{
    setIsClose(!isClose)
    close(isClose)
  } , [isClose])

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    setStep(2);
    setMessage('');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Implement OTP verification logic here (server-side verification in a real app).
    // For this example, let's assume the OTP is valid, and move to the next step.
    setStep(3);
    setMessage('');
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Implement password reset logic here (server-side logic in a real app).
    // For this example, let's assume the password is successfully reset.
    setMessage('Password reset successfully!');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-popup">
        <button className="close-button" onClick={() => handleClose()}>x</button>
        <div className="popup-content">
          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <label>Email:</label>
              <input type="email" value={email} className={"Finput"} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" className='Fbutton'>Submit</button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleOtpSubmit}>
              <label>OTP:</label>
              <input type="text" value={otp} className={"Finput"} onChange={(e) => setOtp(e.target.value)} />
              <button type="submit" className='Fbutton'>Submit</button>
            </form>
          )}
          {step === 3 && (
            <form onSubmit={handlePasswordReset}>
              <label>New Password:</label>
              <input type="password" className={"Finput"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <button type="submit" className='Fbutton'>Reset Password</button>
            </form>
          )}
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
