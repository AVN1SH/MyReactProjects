import { useState } from "react";

interface Props {
  keys : [string];
  values : [string];
}

const Specification = ({keys, values} : Props) => {
  const [isStreached, setisStreached] = useState(false);

  const handleOnClick = () => {
    setisStreached(!isStreached);
  }

  return (
    <div className="product-page-specification-container" style={isStreached ? {"height" : "fit-content"} : {"height" : "200px"}}>
      <div className="product-page-specification-title">
        {keys.map((key, index) => <p key={index} style={index % 2 === 0 ? {"backgroundColor" : "#9eddff"} : {"backgroundColor" : "#dcdcdc"}}>{key}</p>)}
      </div>
      <div className="product-page-specification-content">
        {values.map((value, index) => <p key={index} style={index % 2 === 0 ? {"backgroundColor" : "#9eddff"} : {"backgroundColor" : "#dcdcdc"}}>{value}</p>)}
      </div>
      <div className="product-page-specification-show-more-div" style={isStreached ? {"display" : "none"} : {"display" : "block"}}>
        <button onClick={handleOnClick}>Show More...</button>
      </div>
    </div>
  )
}

export default Specification
