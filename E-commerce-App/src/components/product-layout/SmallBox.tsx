import {Props} from "./Box.tsx";

const SmallBox = ({boxDetails} : Props) => {
  if(!boxDetails) return (<div>Something went wrong</div>)
  return (
    <div className="small-box">
      <img className="small-box-image" src = {boxDetails.img}/>
      <div className="small-box-name" >
        {boxDetails.name.length >= 45 ? boxDetails.name.slice(0, 45) + "...." : boxDetails.name}
      </div>

      <div>
        <div className="small-box-price"><p>₹{boxDetails.price}</p></div>
        <div className="small-box-ratings-verified-cart">
          <div className="small-box-ratings-verified">
            <div className="small-box-ratings">
              <div>
                <img src = {boxDetails.ratingImg[0]} />
                <img src = {boxDetails.ratingImg[1]} />
                <img src = {boxDetails.ratingImg[2]} />
                <img src = {boxDetails.ratingImg[3]} />
                <img src = {boxDetails.ratingImg[4]} />
                
              </div>

              <div><p>{boxDetails.rating}</p></div>
            </div>
            <div className="small-box-verified">  
              <img src = {boxDetails.verified} />
              <p>Store Verified</p>
            </div>
          </div>
            <div className="small-box-cart">
              <button>Click</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBox;