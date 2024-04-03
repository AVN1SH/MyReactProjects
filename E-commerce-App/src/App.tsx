import NavigationBar from "./components/NavigationBar.tsx";
import NavigationBar2 from "./components/NavigationBar2.tsx";
import LeftSideBar from "./components/LeftSideBar.tsx";
import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import expressService from "./appwrite/express.ts";
import {login, logout} from "./features/authSlice.ts"
function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  useEffect((() => {
    expressService.getCurrentUser()
      .then((userData) => {
        if(userData) {
          dispatch(login({userData}))
          setUserName(userData.data.firstName)
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }), []) 

  return (
    <div>
      <NavigationBar userName={userName}/>
      <NavigationBar2 deals = "Top treding deals of this week | upto 50% off"/>
      <LeftSideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;