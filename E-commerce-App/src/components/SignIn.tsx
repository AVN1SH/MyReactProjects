import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {login as authSignIn} from "../features/authSlice";
import Input from "./Input";
import authService from '../appwrite/auth';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
  const [error, setError] = useState("");

  const SignIn = async (data : any) => {

    setError("")
    try {

      const session = await authService.login(data);

      if(session) {
        const userData = await authService.getCurrentUser();
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
    <div>
      <div>
        <h2>Sign-in to your account</h2>
        <p>
          Dont't have any account? : <Link to="/sign-up">Click here</Link>
        </p>
        {error && <p>{error}</p>}
      </div>
      <form onSubmit={handleSubmit(SignIn)}>
        <div>
          <Input label = "Email" placeholder="Enter your email" type="email" {...register("email", {
            required : true, 
            validate : {
              matchPattern : (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email must be valid address"
            }
            })}
          />

          <Input label = "Password" placeholder="Enter password" type="password" {...register("password", {
            required : true, 
            validate : {
              matchPattern : (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || "password must be valid"
            }
            })}
          />

            <button 
              type="submit"
            >Sign-in</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
