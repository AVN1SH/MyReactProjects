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
import Products from './pages/Products.tsx'
import Orders from './pages/Orders.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/trending' element={<List data='trending component'/>} />
      <Route path='/mens-fashions' element={<List data='mens fashions'/>} />
      <Route path='/mobiles' element={<List data='mobiles'/>} />
      <Route path='/computers' element={<List data='computers'/>} />
      <Route path='/electronics' element={<List data='electronics'/>} />
      <Route path='/kids' element={<List data='kids'/>} />
      <Route path='/grocery' element={<List data='grocery'/>} />
      <Route path='/customer-service' element={<List data='customer service'/>} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<Orders/>} />

      <Route path="/products/:id" element={<Products/>} />
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
