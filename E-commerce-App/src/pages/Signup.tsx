import SignInAPI from "../components/SignInAPI"
import SignUp from "../components/SignUp"

const Signup = () => {
  return (
    <div className="sign-up-page-container">
      <div className="sign-up-page-signup-componenet"><SignUp /></div>
      <div className="sign-up-page-api-login-component"><SignInAPI /></div>
    </div>
  )
}

export default Signup
