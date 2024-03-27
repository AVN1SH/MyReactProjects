import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { add } from "../../features/cartSlice";

//icon section............
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductRating from "../ProductRating";
import ProductVerified from "../ProductVerified";
import { faCartArrowDown, faTag } from "@fortawesome/free-solid-svg-icons";


export interface Props{
  boxDetails : {
    _id : string;
    name : string;
    specification : {
      keys : [string];
      values : [number | string];
    };
    description : [{
      image : string;
      title : string;
      content : string;
    }];
    image : string;
    price : number;
    stock : number;
    rating : number;
    verified : boolean;
  }
}

const Box = ({boxDetails} : Props) => {
  if(!boxDetails) return (<div>Something went wrong</div>);

  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    
    dispatch(add({
      _id : boxDetails._id,
      name : boxDetails.name,
      image : boxDetails.image,
      price : boxDetails.price,
      stock : boxDetails.stock,
      rating : boxDetails.rating,
      verified : boxDetails.verified
    }));
  }

  return (
      <div className="box">
        <Link to={`/products/${boxDetails._id}`} style={{"textDecoration":"none", "width" : "100%", "height" : "65%"}} >
          <img className= "box-image" src = {boxDetails.image} />
        </Link>

        <div className="box-details">
          <p className="box-brand-name">By {boxDetails.specification.values[0]}</p>
          <p className = "box-name">
            <Link to={`/products/${boxDetails._id}`}>
            {boxDetails.name.length >= 45 ? boxDetails.name.slice(0, 45) + "...." : boxDetails.name}
            </Link>
          </p>

          <div className="box-price">
            <p>{boxDetails.price.toLocaleString("en-IN", {
                style : "currency",
                currency : "INR",
                minimumFractionDigits : 0
            })}</p>
            <p>{(boxDetails.price + (boxDetails.price * 0.1)).toLocaleString("en-IN", {
              style : "currency",
              currency: "INR",
              minimumFractionDigits : 0
            })}</p>
            <p>10% off</p>
            <FontAwesomeIcon className="box-price-tag-icon" icon={faTag}/>
          </div>

          <div className="box-rating">
            <ProductRating rating={boxDetails.rating}/>
            <p>{boxDetails.rating}</p>
          </div>

          <div className = "box-verified">
            {boxDetails.verified && <ProductVerified />}
          </div>
          <button className="box-cart-button" onClick={handleAddToCartClick}>
            <FontAwesomeIcon className="box-add-to-cart-icon" icon={faCartArrowDown} />
            Add to cart
          </button>
        </div>
      </div>
  )
}

export default Box