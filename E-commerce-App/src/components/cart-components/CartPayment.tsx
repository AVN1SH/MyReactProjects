import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import { useState, useEffect } from "react";

const CartPayment = () => {
  const cartItems = useSelector( (state: RootState) => state.cartSlice.productsDetails);
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + (item.stock > 0 ? item.price * item.quantity : 0), 0);
    setTotalItemPrice(total);
  }, [cartItems]);


  return (
    <div>
      <div>
        <div>
          <p>Sub Total : </p>
          <p>{totalItemPrice.toLocaleString("en-IN", {
            style : "currency",
            currency : "INR"
          })}</p>
        </div>
        <div>
          <p>Discount : </p>
          <p>price</p>
        </div>
        <div>
          <p>Shipping Charge : </p>
          <p>{totalItemPrice >=500 ? "Free" : "₹500"}</p>
        </div>
        <div>
          <h5>Total : </h5>
          <h5>{(totalItemPrice >= 500 ? totalItemPrice : totalItemPrice + 500).toLocaleString("en-IN", {
            style : "currency",
            "currency" : "INR"
          })}</h5>
        </div>
      </div>
        <button>Continue to Payment</button>
    </div>
  )
}

export default CartPayment
