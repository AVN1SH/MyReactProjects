import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import expressService from "../appwrite/express";

//icon part........
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from "@fortawesome/free-solid-svg-icons/faUserMinus";

const SignOut = () => {
  const dispatch = useDispatch();
  const handleOnClick = async () => {
    try {
      await expressService.logout();
      dispatch(logout());
    } catch (error) {
        throw error;
    }
  }
  return (
    <div>
      {/* <img src="https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/person_remove_FILL0_wght400_GRAD0_opsz24.svg" 
        onClick={handleOnClick}
      /> */}
      <FontAwesomeIcon className="navigation-user-minus-icon" icon={faUserMinus} onClick={handleOnClick} />
    </div>
  )
}

export default SignOut
