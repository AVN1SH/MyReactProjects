import { useState } from "react";
interface Props {
  images : [string];
}
const ImagesPreview = ({images} : Props) => {
  const [clickedImage, setClickedImage] = useState(images[0]);

  const handleOnClick = (image : string) => {
    setClickedImage(image);
  }
  // const imageCollection = productInfo[0].img;

  return (
    <div className="product-page-image">
      <img src={clickedImage} />
      <div className="product-page-image-collection">
        {images.map((image) => <img 
          src={image} key={image} 
          onClick={() => handleOnClick(image)}
          style={clickedImage === image ? {
            "borderWidth" : "3px",
            "borderStyle" : "solid",
            "borderColor" : "skyblue",
            "boxShadow" : "0 0 3px skyblue"
          } : {
            "border" : "none"
          }}
        />)}
      </div>
    </div>
  )
}

export default ImagesPreview;
