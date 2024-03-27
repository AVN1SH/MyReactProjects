import { faGoogle, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SignInAPI = () => {
  return (
    <div className="sign-in-by-api-container">
      <h2>Sign-in directly</h2>
      <button>
          <FontAwesomeIcon icon={faGoogle} size="lg" />
          Sign in by Google
      </button>
      <button>
        <FontAwesomeIcon icon={faSquareFacebook} size="lg"/>
        Sign in by Facebook
      </button>
      <button>
        <FontAwesomeIcon icon={faBell} size="lg"/>
        Comming soon..!
      </button>
    </div>
  )
}

export default SignInAPI
