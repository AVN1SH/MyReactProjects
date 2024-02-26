import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { add } from "../../features/cartSlice";


export interface Props{
  boxDetails : {
    id : string;
    name : string ;
    img : string;
    price : number;
    rating : number;
    ratingImg : string[];
    verified : string;
    stock : number;
  }
}

const Box = ({boxDetails} : Props) => {
  if(!boxDetails) return (<div>Something went wrong</div>);

  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    
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
      <div className="box">
        <Link to={`/products/${boxDetails.id}`} style={{"textDecoration":"none", "width" : "100%", "height" : "65%"}} >
          <img className= "box-image" src = {boxDetails.img} />
        </Link>

        <div className = "box-name">
          <Link to={`/products/${boxDetails.id}`}>
          {boxDetails.name.length >= 85 ? boxDetails.name.slice(0, 85) + "...." : boxDetails.name}
          </Link>
        </div>

        <div>
          <div className = "box-price">
            <p>₹{boxDetails.price}</p>
          </div>
          <div className="box-ratings-verified-cart">
            <div className = "box-ratings-verified">
              <div className = "box-ratings">
                <div>
                  <img src = {boxDetails.ratingImg[0]} />
                  <img src = {boxDetails.ratingImg[1]} />
                  <img src = {boxDetails.ratingImg[2]} />
                  <img src = {boxDetails.ratingImg[3]} />
                  <img src = {boxDetails.ratingImg[4]} />
                </div>

                <div>
                  <p>{boxDetails.rating}</p>
                </div>

              </div>
              <div className = "box-verified">
                <img src = {boxDetails.verified} />
                <p>Store Verified</p>
              </div>
            </div>
            <div className="box-cart">
              <button onClick={handleAddToCartClick}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Box