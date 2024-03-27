import productInfo from "../data/myProducts.json";
import Box from "../components/product-layout/Box.tsx";
import SmallBox from "../components/product-layout/SmallBox.tsx"
import Banner from "../components/Banner.tsx";
import {useEffect, useState} from "react";
import expressService, { ProductInfoType } from "../appwrite/express.ts";
export interface ProductType{
    name : string;
    img : string;
    price : number;
    rating : number;
    ratingImg : string[];
    verified : string;
}

interface TestProducts {
  _id : string,
  name : string,
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

const Home = () => {
  
  const [slideCount, setSlideCount] = useState(0);

  const bannerInfo = [
    "https://avn1sh.github.io/data/ecom-reactjs/images/banner-image-1.jpg",
    "https://avn1sh.github.io/data/ecom-reactjs/images/banner-image-2.webp",
    "https://avn1sh.github.io/data/ecom-reactjs/images/banner-image-3.jpg",
  ];

  const [products, setProducts] = useState<ProductInfoType[]>([]);

  useEffect(() => {
    expressService.allProducts()
    .then((productInfo) => {
      if(productInfo) {
        setProducts(productInfo);
      }
    })
  }, []);

  const renderBanner = () => {
    const comp = bannerInfo.map((info, index) => {
      if(slideCount === index) {
        return <Banner key={info} bannerImage = {info} />
      }
    })

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setSlideCount((slideCount + 1) % bannerInfo.length);
      }, 2000)
  
      return (() => {
        clearTimeout(timeoutId);
      })
    }, [slideCount])
  
    return comp;
  }

  return (
    <div>
      {
       renderBanner()
      }
      <h1>Our Products</h1>
      <div className="boxes">
        {
          products.length && products.map((product) => (<Box key={product._id} boxDetails={product} />))
        }
        {/* <Box boxDetails = {productInfo[0]}/>
        <Box boxDetails = {productInfo[1]}/>
        <Box boxDetails = {productInfo[2]}/>
        <Box boxDetails = {productInfo[3]}/> */}
      </div>
      <h1>Shop From Amazon</h1>
      <div className="small-boxes">
        {/* <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/> */}
      </div>
      <h1>Shop From Flipkart</h1>
      <div className="small-boxes">
        {/* <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/>
        <SmallBox boxDetails=  {productInfo[0]}/> */}
      </div>
    </div>
  )
}

export default Home
