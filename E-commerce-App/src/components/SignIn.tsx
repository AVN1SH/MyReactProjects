import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {login as authSignIn} from "../features/authSlice";
import Input from "./Input";
import expressService from '../appwrite/express';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
  const [error, setError] = useState("");

  const SignIn = async (data : any) => {

    setError("")
    try {

      const session = await expressService.login(data);

      if(session) {
        const userData = await expressService.getCurrentUser();
        if(userData) {
          dispatch(authSignIn(userData));
          navigate("/");
        }
      }
    } catch (error : any) {
      setError(error.message)
    }
  }

  return (
    <div className="form-container">
      <div className="form-info-container">
        <h2>Sign-in to your account</h2>
        <p>
          Dont't have any account? : <Link to="/sign-up">Click here</Link>
        </p>
        {error && <p>{error}</p>}
      </div>
      <form onSubmit={handleSubmit(SignIn)}>
        <div className="inner-form-container">
          <Input label = "Email" placeholder="Enter your email" type="email" {...register("email", {
            required : true, 
            validate : {
              matchPattern : (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email must be valid address"
            }
            })}
          />

          <Input label = "Password" placeholder="Enter your password" type="password" {...register("password", {
            required : true, 
            validate : {
              matchPattern : (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || "password must be valid"
            }
            })}
          />

            <button 
              type="submit"
            ><FontAwesomeIcon icon={faRightToBracket}/>Sign-in</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
