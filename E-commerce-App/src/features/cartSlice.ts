import { createSlice } from "@reduxjs/toolkit/react";

export interface CartState {
  productsDetails : ProductState[];
}

export interface ProductState {
  _id : string;
  name : string;
  image : string;
  price : number;
  stock : number;
  rating : number;
  verified : boolean;
  quantity : number;
}

const initialState : CartState = {
  productsDetails : []
}

const cartSlice = createSlice({
  name : "products",
  initialState,
  reducers : {
    add : (state, action) => {
      const product = action.payload;
      const existingProduct =  state.productsDetails.find((item) => item._id === product._id);
      
      if(existingProduct){
        existingProduct.quantity += 1;
      }else{
        product.quantity=1;
        state.productsDetails =  [...state.productsDetails , product] ;
        console.log(state.productsDetails);
      }

      //uploading cart data to local storage........
      const  cartItems = JSON.stringify(state.productsDetails);
      localStorage.setItem("cartItems", cartItems);
    },

    remove : (state, action) => {
      const index = action.payload;
      state.productsDetails = state.productsDetails.filter((_, i) => i !== index);

      //we can also directly return the value also..!

      const  cartItems = JSON.stringify(state.productsDetails);
      localStorage.setItem("cartItems", cartItems);
    },

    update : (state, action) => {
      const product  = action.payload;
      const existingProduct = state.productsDetails.find((item) => item._id === product._id);

      existingProduct!.quantity = product.quantity;

      //uploading cart data to local storage..........
      const cartItems = JSON.stringify(state.productsDetails);
      localStorage.setItem("cartItems", cartItems);
      
    },

    restore : (state) => {
      const cartItems = localStorage.getItem("cartItems");
      if(cartItems) {
        state.productsDetails = JSON.parse(cartItems);
      }
    }
  }
});

export const {add, remove, update, restore} = cartSlice.actions;
export default cartSlice.reducer;