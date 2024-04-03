import logoIcon from '../data/icons/shop-bag.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {Link, Navigate} from "react-router-dom";
import SignOut from './SignOut';
//icons section here........
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faDolly, faShop, faShopLock } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

interface UserData {
  userName : string;
}

const NavigationBar = ( {userName} : UserData) => {
  const authStatus = useSelector((state : RootState) => state.authSlice.status);
  return (
    <div className = "nav-bar">
      <div className = "left-part">
          {/* <img className = "logo" src = {logoIcon}></img> */}
          {!authStatus && <FontAwesomeIcon className="logo" icon={faShopLock} />}
          {authStatus && <FontAwesomeIcon className="logo" icon={faShop} />}
          <p className = "name">STORE</p>
      </div>

      <div className = "middle-part">
        <input type = "search" placeholder='Search'/>
        <FontAwesomeIcon className="navigation-search-icon" icon={faMagnifyingGlass} />
      </div>

      <div className = "right-part">
        { authStatus 
          ? <Link className="navigation-user-icon-link" to="/profile">
              <FontAwesomeIcon className="navigation-user-icon" icon={faUser} />
              <h3>{userName} <FontAwesomeIcon icon={faCaretDown}/></h3>
            </Link>
          : <Link className="navigation-user-icon-link" to="/sign-in">
            <FontAwesomeIcon className="navigation-user-icon" icon={faUser} />
            <h3>Sign-In</h3>
            </Link>
        }
        {
          !authStatus && <Link to="/sign-up">
            <FontAwesomeIcon className="navigation-user-plus" icon={faUserPlus} />
          </Link>
        }

        {/* { authStatus && <Link className="navigation-order-icon-link" to="/orders">
          <h3><FontAwesomeIcon icon={faDolly}/>Orders</h3>
        </Link> } */}
        { authStatus && <SignOut /> }

        <Link to="/cart"> 
          <FontAwesomeIcon className="navigation-cart-icon" icon={faCartPlus} />
        </Link>

      </div>
    </div>
  )
}

export default NavigationBar;
