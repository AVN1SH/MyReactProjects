import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Home from "./pages/Home.tsx"
import List from "./components/product-layout/List.tsx"

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./store/store.ts"
import Signin from './pages/Signin.tsx'
import Signup from './pages/Signup.tsx'
import Cart from "./pages/Cart.tsx"
import Profile from "./pages/Profile.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/trending' element={<List data='trending component'/>} />
      <Route path='/mens-fashions' element={<List data='mens fashions'/>} />
      <Route path='/mobiles-computers' element={<List data='mobiles and computers'/>} />
      <Route path='/electronics' element={<List data='electronics'/>} />
      <Route path='/customer-service' element={<List data='customer service'/>} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>,
)
