import NavigationBar from "./components/NavigationBar.tsx";
import NavigationBar2 from "./components/NavigationBar2.tsx";
import LeftSideBar from "./components/LeftSideBar.tsx";
import Banner from "./components/Banner.tsx";
import {useEffect, useState} from "react";
import Box from "./components/Box.tsx";
import SmallBox from "./components/SmallBox.tsx"
import {Outlet} from "react-router-dom";

import productInfo from "./data/myProducts.json";

function App() {

  let [slideCount, setSlideCount] = useState(0);
  const bannerInfo = [
    "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/images/banner-image-1.jpg",
    "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/images/banner-image-2.webp",
    "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/images/banner-image-3.jpg",
  ];

  const renderBanner = () => {
    const comp = bannerInfo.map((info, index) => {
      if(slideCount === index) {
        return <Banner key={info} bannerImage = {info} />
      }
    })
    return comp;
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSlideCount((slideCount + 1) % bannerInfo.length);
    }, 2000)

    return (() => {
      clearTimeout(timeoutId);
    })
  }, [slideCount])

  

  // clearTimeout(timer);

  return (
    <div>
      <NavigationBar />
      <NavigationBar2 deals = "Top treding deals of this week | upto 50% off"/>
      <LeftSideBar />
      {
       renderBanner()
      }
      <h1>Our Products</h1>
      <div className="boxes">
        <Box boxDetails=  {productInfo.products[0]} />
        <Box boxDetails = {productInfo.products[1]}/>
        <Box boxDetails = {productInfo.products[2]}/>
        <Box boxDetails = {productInfo.products[3]}/>
      </div>
      <h1>Shop From Amazon</h1>
      <div className="small-boxes">
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
      </div>
      <h1>Shop From Flipkart</h1>
      <div className="small-boxes">
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
        <SmallBox boxDetails=  {productInfo.products[0]}/>
      </div>
    </div>
  );
}

export default App;
