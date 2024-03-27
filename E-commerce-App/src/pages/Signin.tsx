import SignIn from "../components/SignIn";
import SignInAPI from "../components/SignInAPI";

const Signin = () => {
  return (
    <div className="sign-in-page-container">
      <div className="sign-in-page-signin-component"><SignIn /></div>
      <div className="sign-in-page-signin-api-component"><SignInAPI /></div>
    </div>
  )
}

export default Signin
