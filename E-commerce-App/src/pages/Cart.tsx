import { RootState } from "../store/store";
import {useSelector, useDispatch} from "react-redux";
import CartList from "../components/cart-components/CartList";
import { useEffect } from "react";
import { restore } from "../features/cartSlice";
import CartPayment from "../components/cart-components/CartPayment";

const Cart = () => {

  const  cartItems = useSelector((state : RootState)=> state.cartSlice.productsDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restore())
  },[])
  return (
    <div className="cart-page">
      <div className="cart-product-list">
        {cartItems.map((_, index) => <CartList key= {index} index={index} />)}
      </div>
      <div className="cart-payment-summary">
        <CartPayment />
      </div>
    </div>
  )
}

export default Cart;
