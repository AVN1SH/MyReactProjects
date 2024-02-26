import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux"
import { RootState } from '../store/store';


const LeftSideBar = () => {
  const authStatus = useSelector((state : RootState) => state.authSlice.status);
  return (
    <div className = "left-side-bar">
      <div>
        <Link to = "/trending" >
          <button>Trending</button>
        </Link>
      </div>
      <div>
        <Link to = "/mens-fashions" >
          <button>Men's Fashion</button>
        </Link>
      </div>
      <div>
        <Link to = "/mobiles-computers" >
          <button>Mobiles & Computers</button>
        </Link>
      </div>
      <div>
        <Link to = "/electronics">
          <button>Electronics</button>
        </Link>
      </div>
      <div>
        <Link to = "/customer-service">
          <button>customer Service</button>
        </Link>
      </div>
      {
        authStatus && <div>
          <Link to = "/profile">
          <button>Profile</button>
          </Link>
        </div>
      }
      { 
        !authStatus && <div>
          <Link to = "/sign-in">
          <button>Sign in</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default LeftSideBar
