import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";

const SignOut = () => {
  const dispatch = useDispatch();
  const handleOnClick = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
        throw error;
    }
  }
  return (
    <div>
      <img src="https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/person_remove_FILL0_wght400_GRAD0_opsz24.svg" 
        onClick={handleOnClick}
      />
    </div>
  )
}

export default SignOut
