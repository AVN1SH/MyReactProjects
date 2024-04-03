import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {login as authSignIn} from "../features/authSlice";
import Input from "./Input";
import expressService from '../appwrite/express';
import {SubmitHandler, useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

interface FormInfo {
  email : string;
  password : string;
}
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit, setError, formState : {errors, isSubmitting}} = useForm<FormInfo>();
  // const [error, setError] = useState("");

  const SignIn:SubmitHandler<FormInfo> = async (data : any) => {

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const session = await expressService.login(data);

      if(session) {
        const userData = await expressService.getCurrentUser();
        if(userData) {
          dispatch(authSignIn(userData));
          navigate("/");
        }
      }
    } catch (error : any) {
      if(error.message === "404") {
        setError("email", {
          message : "email dosn't exist..!"
        })
      }
      if(error.message === "400") {
        setError("password", {
          message : "Password doesn't matches..!"
        })
      }
    }
  }

  return (
    <div className="form-container">
      <div className="form-info-container">
        <h2>Sign-in to your account</h2>
        <p>
          Dont't have any account? : <Link to="/sign-up">Click here</Link>
        </p>
        {/* {error && <p>{error}</p>} */}
      </div>
      <form onSubmit={handleSubmit(SignIn)}>
        <div className="inner-form-container">
          <div>
            <Input 
              label = "Email" 
              placeholder="Enter your email" 
              type="email" 
              error={errors.email ? true : false}
              {...register("email", {
              required : "Email is required", 
              validate : {
                matchPattern : (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email must be valid address"
              }
              })}
            />
            {errors.email && <div className="form-errors" >{errors.email.message}</div>}
          </div>

          <div>
            <Input 
            label = "Password" 
            placeholder="Enter your password" 
            type="password" 
            error={errors.password ? true : false}
            {...register("password", {
              required : "Password is required"
              })}
            />
            {errors.password && <div className="form-errors" >{errors.password.message}</div>}
          </div>
            <button 
              type="submit"
            >{isSubmitting ? "Submitting" : <FontAwesomeIcon icon={faRightToBracket}/>}{!isSubmitting && "SignIn"}</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
