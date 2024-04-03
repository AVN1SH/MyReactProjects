import {useEffect, useState} from 'react';
import expressService from '../appwrite/express';
import {Link, useNavigate} from "react-router-dom";
import {login} from "../features/authSlice";
import Input from "./Input";
import {SubmitHandler, useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
import OTPButton from "./OTPButton";

interface FormInfo {
  avatar ?: FileList;
  firstName : string;
  middleName : string;
  lastName : string;
  email : string;
  mobNum ?: string;
  password : string;
  userEmailOTP : string;
  userMobNumOTP ?: string;
}
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit, watch, setError, formState : {errors, isSubmitting}} = useForm<FormInfo>();
  const [userEmail, setUserEmail] = useState('');
  const [userMobNum, setUserMobNum] = useState('');
  const [emailOTP, setEmailOTP] = useState<number | null>(null);
  const [mobNumOTP, setMobNumOTP] = useState<number | null>(null);
  const [userEmailOTP, setUserEmailOTP] = useState('');
  const [userMobNumOTP, setUserMobNumOTP] = useState('');
  const [avatar, setAvatar] = useState<FileList | null>(null);

  const create:SubmitHandler<FormInfo> = async (data) => {
    if(emailOTP === Number(data.userEmailOTP) 
      && (data.mobNum ? mobNumOTP === Number(data.userMobNumOTP) : true)
    ) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        const registerData = await expressService.createAccount({
          firstName : data.firstName,
          middleName : data.middleName,
          lastName : data.lastName,
          avatar : data.avatar && data.avatar[0],
          email : data.email,
          mobNum : data.mobNum,
          password : data.password
        });
        if(registerData) {
          const userData = await expressService.getCurrentUser();
          if(userData) dispatch(login(userData));
          navigate("/");
        }
      } catch (error : any) {
        if(error.message === "409") {
          setError("email", {
            message : "Email has already been used."
          })
        }
      }
    } else {
      if(emailOTP === Number(data.userEmailOTP) && mobNumOTP !== Number(data.userMobNumOTP)) {
        setError("userMobNumOTP", {
          message : "OTP required"
        })
      }
      else if(mobNumOTP === Number(data.userMobNumOTP) && emailOTP !== Number(data.userEmailOTP))
        setError("userEmailOTP", {
          message : "OTP required"
        })
      else{
        setError("userMobNumOTP", {
          message : "OTP required"
        })
        setError("userEmailOTP", {
          message : "OTP required"
        })
      }
    }
  }
  useEffect(() => {
    console.log(watch("avatar"));
    setUserEmail(watch("email"));
    setUserMobNum(watch("mobNum")?? "");
    setUserEmailOTP(watch("userEmailOTP"));
    setUserMobNumOTP(watch("userMobNumOTP")?? "");
    setAvatar(watch("avatar")?? null);
  },[
    watch("email"), 
    watch("mobNum"), 
    watch("userEmailOTP"), 
    watch("userMobNumOTP"),
    watch("avatar")
  ]);

  return (
    <div className="form-container">
      <div className="form-info-container">
        <h2>Sign-up to your account</h2>
        <p>
          Already have any account? : <Link to="/sign-in">Click here</Link>
        </p>
        {/* {error && <p>{error}</p>} */}
        {/* {errors.root && <div className='form-errors'>{errors.root.message}</div>} */}
      </div>
      <form onSubmit={handleSubmit(create)}>
        <div className="inner-form-container">
          <div className="form-avatar-input" >
            <Input 
              label="Avatar" 
              type="file" 
              accept="*.jpg" 
              avatar={avatar}
              {...register("avatar")}/>
          </div>
          
          <div className="form-name-input">
            <div>
              <Input 
                label="First Name"
                placeholder="Enter First Name"
                type="text"
                { ...register("firstName", {required : "First name is required"})}
              />
              {errors.firstName && <div className="form-errors" >{errors.firstName.message}</div>}
            </div>

            <Input 
              label="Middle Name"
              placeholder="Enter Middle Name"
              type="text"
              { ...register("middleName")}
            />
            <Input 
              label="Last Name"
              placeholder="Enter Last Name"
              type="text"
              { ...register("lastName")}
            />
          </div>
          <div className="form-email-input">
            <div>
              <Input label = "Email" placeholder="Enter your email" type="email" {...register("email", {
                required : "Email is required", 
                validate : {
                  matchPattern : (value) => {
                    if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
                      return "Invalid  Email format.";;
                    } 
                    return true;
                  } 
                }
                })}
              />
              {errors.email && <div className='form-errors'>{errors.email.message}</div>}
            </div>
            <OTPButton userEmail={userEmail} getOTP={(data : number) => setEmailOTP(data)}/>
            <div>
              <Input 
                label="Email OTP" 
                placeholder="Enter OTP" 
                type="number" 
                field='OTP' 
                authData={userEmail}
                userOTP={(userEmailOTP)}
                OTP={emailOTP}
                {...register("userEmailOTP")}
              />
              {errors.userEmailOTP && <div className='form-errors'>{errors.userEmailOTP.message}</div>}
            </div>
          </div>
          <div className="form-mobile-input">
            <div>
              <Input 
                label="Mobile no." 
                placeholder="Enter Mobile Number" 
                type="number" 
                field='mobNum'
                {...register("mobNum", {
                  validate : {
                    matchPattern : (value) => {
                      return value?.trim() === '' || value && /^[0-9]{10}$/.test(value)
                    }
                  }
                })}
              />
              {errors.mobNum && <div className='form-errors'>{errors.mobNum.message}</div>}
            </div>

            <OTPButton userMobNum={userMobNum} getOTP={(data : number) => setMobNumOTP(data)}/>
            <div>
              <Input 
                label="Mob OTP" 
                placeholder="Enter Mobile OTP" 
                type="number" 
                field='OTP'
                authData={userMobNum}
                userOTP={userMobNumOTP}
                OTP={mobNumOTP}
                {...register("userMobNumOTP")}
              />
              {errors.userMobNumOTP && <div className='form-errors'>{errors.userMobNumOTP.message}</div>}
            </div>
          </div>

          <div>
            <Input label = "Password" placeholder="Enter password" type="password" {...register("password", {
              required : true, 
              validate : {
                matchPattern : (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || "password must at least of 8 char. and contain one 'special char', 'number', 'upper case letter' and 'lower case letter'"
              }
              })}
            />
            {errors.password && <div className='form-errors'>{errors.password.message}</div>}
          </div>

            <button 
              type="submit"
              disabled={isSubmitting}
            >{isSubmitting ? "Submitting" : "SignUp"}</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
