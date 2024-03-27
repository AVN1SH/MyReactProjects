import {useSelector, useDispatch} from "react-redux";
import { update, remove } from "../../features/cartSlice";
import { RootState } from "../../store/store";
import {useState} from "react";
import { Link } from "react-router-dom";
import ProductVerified from "../ProductVerified";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faTag } from "@fortawesome/free-solid-svg-icons";

interface  Props{
  index : number;
};

const CartList = ({index} : Props) => {

  const products = useSelector((state : RootState) => state.cartSlice.productsDetails);

  const cartListDetails = products[index];

  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(remove(index));
  }

  const selectQuantity = [];
  for (let i=1; i <= (cartListDetails.stock <= 10 ? cartListDetails.stock : 10); i++) {
    selectQuantity.push(i);
  }

  const [selectedQty, setSelectedQty] = useState(cartListDetails.quantity);

  const handleSelectOnChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setSelectedQty(value);
    dispatch(update({
      _id : cartListDetails._id,
      quantity : value
    }))
  }

    
  return (
    <div className="individual-cart-list-container">
      <div className="cart-product-image-select-container">
      <Link to={`/products/${cartListDetails._id}`}>
          <img src={cartListDetails.image} />
        </Link>
        <select value={selectedQty} onChange={handleSelectOnChange}>
          {selectQuantity && selectQuantity.map((value, i) => 
          cartListDetails.quantity === value 
          ? <option value={value} key={i}>{value}</option> 
          : <option key={i}>{value >= 10 ? "10+" : value}</option>)}
        </select>
      </div>
      <div className="cart-product-details-container">
        <Link to={`/products/${cartListDetails._id}`} style={{"textDecoration" : "none", "color" : "inherit"}} >
          <h4 className="cart-product-title">
          {cartListDetails.name.length >= 120 ? cartListDetails.name.slice(0, 120) + "...." : cartListDetails.name}
          </h4>
        </Link>
        <p className="cart-product-description">
          Description
        </p>
        <div className="cart-product-stored-verified">
          {cartListDetails.verified && <ProductVerified />}
        </div>
        <div className="cart-product-price-stock-remove-container">
          <div className="box-price">
            <p>{cartListDetails.price.toLocaleString("en-IN", {
                style : "currency",
                currency : "INR",
                minimumFractionDigits : 0
            })}</p>
            <p>{(cartListDetails.price + (cartListDetails.price * 0.1)).toLocaleString("en-IN", {
              style : "currency",
              currency: "INR",
              minimumFractionDigits : 0
            })}</p>
            <p>10% off</p>
            <FontAwesomeIcon className="box-price-tag-icon" icon={faTag}/>
          </div>
          {cartListDetails.stock > 0 ? <p style={{"color" : "#00aa00"}}>In Stock</p> : <p style={{"color" : "orangered"}}>Out of Stock</p>}
          <button onClick={handleRemoveClick}><FontAwesomeIcon icon={faSquareMinus}/>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartList
