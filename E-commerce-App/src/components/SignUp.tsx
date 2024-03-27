import {useState} from 'react';
import expressService from '../appwrite/express';
import {Link, useNavigate} from "react-router-dom";
import {login} from "../features/authSlice";
import Input from "./Input";
import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();

  const create = async (data : any) => {
    console.log(data);
    // try {
    //   console.log(data);
    //   const userData = await expressService.createAccount(data);
    //   if(userData) {
    //     const userData = await expressService.getCurrentUser();
    //     if(userData) dispatch(login(userData));
    //     navigate("/");
    //   }
    // } catch (error : any) {
    //   setError(error.message)
    // }
  }

  return (
    <div className="form-container">
      <div className="form-info-container">
        <h2>Sign-up to your account</h2>
        <p>
          Already have any account? : <Link to="/sign-in">Click here</Link>
        </p>
        {error && <p>{error}</p>}
      </div>
      <form onSubmit={handleSubmit(create)}>
        <div className="inner-form-container">
          <div className="form-avatar-input" >
            <Input label="Avatar" type="file" accept="*.jpg" />
          </div>
          <div className="form-name-input">
            <Input 
              label="First Name"
              placeholder="Enter First Name"
              type="text"
              { ...register("firstName", {required : true})}
            />
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
            <Input label = "Email" placeholder="Enter your email" type="email" {...register("email", {
              required : true, 
              validate : {
                matchPattern : (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email must be valid address"
              }
              })}
            />
            <Input label="Email OTP" placeholder="Enter OTP" type="number"/>
          </div>
          <div className="form-mobile-input">
            <Input label="Mobile no." placeholder="Enter Mobile Number" type="number" />
            <Input label="Mob OTP" placeholder="Enter Mobile OTP" type="number" />
          </div>

          <Input label = "Password" placeholder="Enter password" type="password" {...register("password", {
            required : true, 
            validate : {
              matchPattern : (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || "password must be valid"
            }
            })}
          />

            <button 
              type="submit"
            >Sign-up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
