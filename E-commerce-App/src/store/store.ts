import { configureStore } from "@reduxjs/toolkit";
import authSlice, {AuthState}from "../features/authSlice";
import cartSlice, {CartState} from "../features/cartSlice";


export interface RootState {
  authSlice : AuthState;
  cartSlice : CartState;
}

const store = configureStore({
  // reducer : authSlice
  reducer : {
    authSlice,
    cartSlice
  }
});

export default store;