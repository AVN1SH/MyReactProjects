import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux"
import { RootState } from '../store/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, 
  faBasketShopping, 
  faBolt, 
  faChild, 
  faHeadset, 
  faLaptop, 
  faMobile, 
  faPerson, 
  faUser, 
  faUserPlus 
} from "@fortawesome/free-solid-svg-icons";


const LeftSideBar = () => {
  const authStatus = useSelector((state : RootState) => state.authSlice.status);
  return (
    <div className = "left-side-bar">
      <div>
        <Link to = "/trending" >
          <div>
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
          <button>Trending</button>
        </Link>
      </div>
      <div>
        <Link to = "/mens-fashions" >
        <div><FontAwesomeIcon icon={faPerson} /></div>
          <button>Men's Fashion</button>
        </Link>
      </div>
      <div>
        <Link to = "/mobiles" >
        <div><FontAwesomeIcon icon={faMobile} /></div>
          <button>Mobiles</button>
        </Link>
      </div>
      <div>
        <Link to = "/computers" >
        <div><FontAwesomeIcon icon={faLaptop} /></div>
          <button>Computers</button>
        </Link>
      </div>
      <div>
        <Link to = "/electronics">
        <div><FontAwesomeIcon icon={faBolt} /></div>
          <button>Electronics</button>
        </Link>
      </div>
      <div>
        <Link to = "/kids" >
        <div><FontAwesomeIcon icon={faChild} /></div>
          <button>Kids</button>
        </Link>
      </div>
      <div>
        <Link to = "/Grocery" >
        <div><FontAwesomeIcon icon={faBasketShopping} /></div>
          <button>Kitchen & Grocery</button>
        </Link>
      </div>
      <div>
        <Link to = "/customer-service">
        <div><FontAwesomeIcon icon={faHeadset} /></div>
          <button>Customer Service</button>
        </Link>
      </div>
      {
        authStatus && <div>
          <Link to = "/profile">
        <div><FontAwesomeIcon icon={faUser} /></div>
          <button>Profile</button>
          </Link>
        </div>
      }
      { 
        !authStatus && <div>
          <Link to = "/sign-in">
        <div><FontAwesomeIcon icon={faUserPlus} /></div>
          <button>Sign In</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default LeftSideBar
