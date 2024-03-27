import productInfo from "../../data/myProducts.json";
import ProductRating from "../ProductRating";
import ProductVerified from "../ProductVerified";

interface ProductInfo {
  name : string;
  price : number;
  rating : number;
  stock : number;
  verified : boolean;
}

const BasicInfo = ({name, price, rating, stock, verified} : ProductInfo) => {
  return (
    <div className="product-page-info-inner-container">
      <div className="product-page-title">
        <h3>{name}</h3>
      </div>
      <div className="product-page-price">
        <h2>{price.toLocaleString("en-IN", {
            style : "currency",
            currency : "INR"
          })}</h2>
      </div>
      <div className="product-page-rating-container">
        <div className="product-page-rating-img">
          <ProductRating rating={rating}/>
        </div>
        <div className="product-page-rating">
          <p>{rating}</p>
        </div>
        <div className = "product-page-verified">
          {verified && <ProductVerified />}
        </div>
      </div>
    </div>
  )
}

export default BasicInfo;
