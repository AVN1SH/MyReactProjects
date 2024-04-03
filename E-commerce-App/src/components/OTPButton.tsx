import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import expressService from "../appwrite/express";
import { useEffect, useState } from 'react';

interface Props {
  userEmail ?: string;
  userMobNum ?: string;
  getOTP : (data : number) => void;
}

const OTPButton = ({userEmail, userMobNum, getOTP} : Props) => {

  const [seconds, setSeconds] = useState(60);
  const [startTimer, setStartTimer] = useState(false);
  const [error, setError] =useState<string>()

  const handleOnClick = () => {
    setError('');
    try {
      if(userEmail) {
        expressService.mailverification(userEmail)
        .then((data) => {
          getOTP(data.OTP);
          console.log(data);
        })
      }
      if(userMobNum) {
        expressService.mobNumVerification(userMobNum)
        .then((data) => {
          getOTP(data.OTP);
          console.log(data);
        })
      }
    } catch (error : any) {
      if(error.message === "503") {
        console.log(error.message);
        setError("Failed to send OTP");
        setStartTimer(false);
        setSeconds(30);
      }
    }
    setStartTimer(true);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if(startTimer && seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timer);
        setSeconds(30);
        setStartTimer(false);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, startTimer]);
  return (
    <div className="form-otp-button-div">
      <button 
        type="button" 
        disabled={startTimer} 
        onClick={handleOnClick}
        style={startTimer ? {
          backgroundColor : "gray",
          cursor: 'not-allowed'
        } : {}}
      >
        <FontAwesomeIcon icon={faMessage} />
        {startTimer ? `Sent ${seconds}` : "Send OTP"}
      </button>
      <div className="form-errors">{error && error}</div>
    </div>
  )
}

export default OTPButton
