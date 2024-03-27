import { useParams } from "react-router-dom";
import ImagesPreview from "../components/product-page-components/ImagesPreview";
import BasicInfo from "../components/product-page-components/BasicInfo";
import Features from "../components/product-page-components/Features";
import Button from "../components/product-page-components/Button";
import {useState, useEffect} from "react";
import expressService, { ProductInfoType } from "../appwrite/express";
import ShareButtons from "../components/product-page-components/ShareButtons";
import Specification from "../components/product-page-components/Specification";

const Products = () => {

  const [product, setProduct] = useState<ProductInfoType>();
  const {id} = useParams();

  useEffect(() => {
    expressService.filteredProduct(id as string)
    .then((productInfo) => {
      setProduct(productInfo);
    });
  }, [id]);

  return (
    <div className="product-page-product-info-container">
      <div className="product-page-image-container">
        {product && <ImagesPreview images={product?.imageCollection} />}
        <Button id={id as string}/>
      </div>
      <div className="product-page-info-container">
        <ShareButtons />
        {product && <BasicInfo name={product.name} price={product.price} rating={product.rating} stock={product.stock} verified={product.verified}/>}
        {product && <Specification keys={product.specification.keys} values={product.specification.values} />}
        {product && <Features description={product.description}/>}
      </div>
    </div>
  )
}

export default Products
