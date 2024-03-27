import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar2 } from "@fortawesome/free-regular-svg-icons"
import { useState, useEffect } from "react";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons/faStarHalfStroke";

interface Props {
  rating : number;
}

const ProductRating = ({rating} : Props) => {
  const [starsArray, setStarsArray] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const tempStarsArray : JSX.Element[] = [];
    for(let i = 1; i <= 5; i++) {
      if(i <= rating) {
        tempStarsArray.push(<FontAwesomeIcon icon={faStar} key={i} style={{"color" : "#ffae00"}}/>);
      }
      else if(rating % 1 !== 0 && i < rating + 1 ) {
        tempStarsArray.push(<FontAwesomeIcon icon={faStarHalfStroke} key={i} style={{"color" : "#ffae00"}}/>);
      } else {
        tempStarsArray.push(<FontAwesomeIcon icon={faStar2} key={i} style={{"color" : "#ffae00"}}/>)
      }
    }
    setStarsArray(tempStarsArray);
  }, [rating]);
  return (
    <div>
      {starsArray}
    </div>
  )
}

export default ProductRating
