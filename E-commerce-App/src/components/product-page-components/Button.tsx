import { useDispatch } from "react-redux";
import productInfo from "../../data/myProducts.json"
import { Link, NavLink } from "react-router-dom";
import { add }  from "../../features/cartSlice"

interface Props {
  id : string;
}

const Button = ({id} : Props) => {
  // TODO: need to use id to fetch the details of products...
  const dispatch = useDispatch();
  const boxDetails = productInfo[0];

  const handleOnClick = () => {
    
    dispatch(add({
      id : boxDetails.id,
      name : boxDetails.name,
      img : boxDetails.img,
      price : boxDetails.price,
      rating : boxDetails.rating,
      ratingImg : boxDetails.ratingImg,
      verified : boxDetails.verified,
      stock : boxDetails.stock,
    }));
  }
  return (
    <div className="product-page-buttons-container">
      <button className="product-page-cart-button" onClick={handleOnClick}>
        Add to Cart
      </button>
      <NavLink to={"/cart"}>
        <button className="product-page-buy-now-button" onClick={handleOnClick}>
          Buy Now
        </button>
      </NavLink>
    </div>
  )
}

export default Button;
