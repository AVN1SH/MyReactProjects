import {Link, NavLink} from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className = "left-side-bar">
      <div>
        <Link to = "/" >
          <button>Tranding</button>
        </Link>
      </div>
      <div>
        <button>Men's Fashion</button>
      </div>
      <div>
        <button>Mobiles & Computers</button>
      </div>
      <div>
        <button>Electronics</button>
      </div>
      <div>
        <button>customer Service</button>
      </div>
      <div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default LeftSideBar
