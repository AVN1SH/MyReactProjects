import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartPayment = () => {
  const cartItems = useSelector( (state: RootState) => state.cartSlice.productsDetails);
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + (item.stock > 0 ? item.price * item.quantity : 0), 0);
    setTotalItemPrice(total);
  }, [cartItems]);


  return (
    <div className="cart-payment-outer-container">
      <div className="cart-payment-payment-summary-container">
        <div className="cart-payment-sub-total">
          <p>Sub Total : </p>
          <p>{totalItemPrice.toLocaleString("en-IN", {
            style : "currency",
            currency : "INR"
          })}</p>
        </div>
        <div className="cart-payment-discount">
          <p>Discount : </p>
          <p>price</p>
        </div>
        <div className="cart-payment-shipping-charge">
          <p>Shipping Charge : </p>
          <p>{totalItemPrice >=500 ? "Free" : "₹500"}</p>
        </div>
        <div className="cart-payment-total-amount">
          <h4>Total : </h4>
          <h4>{(totalItemPrice >= 500 ? totalItemPrice : totalItemPrice + 500).toLocaleString("en-IN", {
            style : "currency",
            "currency" : "INR"
          })}</h4>
        </div>
      </div>
      <Link to="/checkout">
        <button className="cart-continue-payment-button">
          <FontAwesomeIcon icon={faMoneyCheck} />
          Continue to Payment
        </button>
      </Link>
    </div>
  )
}

export default CartPayment
