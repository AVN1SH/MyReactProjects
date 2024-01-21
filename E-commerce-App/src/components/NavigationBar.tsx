import logoIcon from '../data/icons/shop-bag.svg';
import { useSelector } from 'react-redux';
import { AuthState } from '../features/authSlice';
import {Link, Navigate} from "react-router-dom";
import SignOut from './SignOut';


const NavigationBar = () => {
  const authStatus = useSelector((state : AuthState) => state.status);
  return (
    <div className = "nav-bar">
      <div className = "left-part">
          <img className = "logo" src = {logoIcon}></img>
          <p className = "name">STORE</p>
      </div>

      <div className = "middle-part">
        <input type = "search" placeholder='Search'/>
        <img src = "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/search_FILL0_wght400_GRAD0_opsz24.svg" />
      </div>

      <div className = "right-part">
        {
          !authStatus && <Link to="/sign-in">
            <img src = "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/person_add_FILL0_wght400_GRAD0_opsz24.svg" />
          </Link>
        }

        {
          authStatus &&  <Link to="/profile">
            <img src="https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/person_FILL0_wght400_GRAD0_opsz24.svg" />
          </Link>
        }

        {
          authStatus && <SignOut />  
        }

        <Link to="/cart"> 
          <img src = "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg" />
        </Link>

      </div>
    </div>
  )
}

export default NavigationBar;
