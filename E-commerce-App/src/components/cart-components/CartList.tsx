import {useSelector, useDispatch} from "react-redux";
import { update, remove } from "../../features/cartSlice";
import { RootState } from "../../store/store";
import {useState} from "react";

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
      id : cartListDetails.id,
      quantity : value
    }))
  }

    
  return (
    <div style={{"display" : "flex", "width":"60%", "height" : "400px", "overflow" : "hidden"}}>
      <div>
        <img src={cartListDetails.img} style={{"width" : "65%", "height" : "auto"}}/>
        <select value={selectedQty} onChange={handleSelectOnChange}>
          {selectQuantity && selectQuantity.map((value, i) => 
          cartListDetails.quantity === value 
          ? <option value={value} key={i}>{value}</option> 
          : <option key={i}>{value >= 10 ? "10+" : value}</option>)}
        </select>
      </div>
      <div>
        <h4>
        {cartListDetails.name.length >= 85 ? cartListDetails.name.slice(0, 85) + "...." : cartListDetails.name}
        </h4>
        <p>
          Description
        </p>
        <div>
          <img src={cartListDetails.verified}/>
          <p>Store Verified</p>
        </div>
        <div>
          <p>{cartListDetails.price.toLocaleString("en-IN", {
            style : "currency",
            currency : "INR"
          })}</p>
          {cartListDetails.stock > 0 ? <p style={{"color" : "green"}}>In Stock</p> : <p style={{"color" : "red"}}>Out of Stock</p>}
          <button onClick={handleRemoveClick}>remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartList
