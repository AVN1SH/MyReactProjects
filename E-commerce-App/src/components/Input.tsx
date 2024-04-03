import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useId, forwardRef,  InputHTMLAttributes, useEffect } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label : string;
  type : string;
  field ?: string;
  authData ?: string;
  userOTP ?: string;
  OTP  ?: number | null;
  avatar ?: FileList | null;
  error ?: boolean;
 
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label, 
  type ='text', 
  field,
  authData,
  userOTP,
  OTP,
  avatar,
  error,
  ...props
}, ref) => {
  const id = useId();
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    if(onFocus) {
      if(OTP == Number(userOTP)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [userOTP, onFocus, OTP])

  
  return (
    <div className="label-input-container"
    style={avatar && avatar !== null && avatar?.length > 0
      ? {backgroundImage :`url(${URL.createObjectURL(avatar[0])})`, "backgroundSize" : "cover", "backgroundPosition" : "center"} 
      : {}}
    >
      {
        label &&
        type === "file" ?
          <label htmlFor={id}>{!(avatar && avatar !== null && avatar?.length > 0) && 
          <FontAwesomeIcon icon={faUpload} />}
          {!(avatar && avatar !== null && avatar?.length > 0) && label}
          </label>
        :
          <label htmlFor = {id}>
              {label}
          </label>
      }
      {
        <input type={type} ref={ref}
          {...props}
          id = {id}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          style={field === 'OTP' 
            ? isValid !== null 
              ? ({
                borderColor : isValid ? "#00aa00" : "red", 
                boxShadow : onFocus ? isValid ? "0 0 3px #00aa00" : "0 0 3px red" : ""
              })
              : {"borderColor" : "#006eff", boxShadow : onFocus ? "0 0 3px #0063ff" : ""}
            : {borderColor : error ? "red" : "#006eff", 
              boxShadow : onFocus ? error ? "0 0 3px red" : "0 0 3px #0063ff" : ""}
          }
        />      
      } 
    </div>
  )
})

export default Input;
//export default forwardRef(Input);  --------  we can also do this instead of wrapping the whole fuction inside the forwardRef..😁 