import { Link } from "react-router-dom";

export interface Props{
  boxDetails : {
    name : string ;
    img : string;
    price : number;
    rating : number;
    ratingImg : string[];
    verified : string;
  }
}

const Box = ({boxDetails} : Props, $id : string) => {
  if(!boxDetails) return (<div>Something went wrong</div>)
  return (
    <Link to={`/products/${$id}`}>
      <div className="box">
        <img className= "box-image" src = {boxDetails.img} />
        <div className = "box-name">
          {boxDetails.name.length >= 85 ? boxDetails.name.slice(0, 85) + "...." : boxDetails.name}
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
              <button>Add to cart</button>
            </div>
          </div>
        </div>
        
        
      </div>
    </Link>
  )
}

export default Box