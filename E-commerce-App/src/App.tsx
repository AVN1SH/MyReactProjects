import NavigationBar from "./components/NavigationBar.tsx";
import LeftSideBar from "./components/LeftSideBar.tsx";
import Banner from "./components/Banner.tsx";
import {useState} from "react";
import Box from "./components/Box.tsx";
import SmallBox from "./components/SmallBox.tsx"
import bannerImage1 from './data/images/banner-image-1.jpg';
import bannerImage2 from "./data/images/banner-image-2.webp";
import bannerImage3 from "./data/images/banner-image-3.jpg";
import boxImage1 from './data/images/macbook.jpg';
import boxImage2 from "./data/images/iphone.jpg";
import boxImage3 from "./data/images/rubick's-cube.jpg";
import boxImage4 from "./data/images/airpod-pro.jpg";


function App() {
  let [slideCount, setSlideCount] = useState(0);
  const bannerInfo = [
    bannerImage1,
    bannerImage2,
    bannerImage3,
  ];

  const renderBanner = () => {
    const comp = bannerInfo.map((info, index) => {
      if(slideCount === index) {
        return <Banner key={info} bannerImage = {info} />
      }
    })
    return comp;
  }

  const timer = setTimeout(() => {
    setSlideCount((slideCount + 1) % bannerInfo.length);
  }, 2000)

  // clearTimeout(timer);

  return (
    <div>
      <NavigationBar />
      <LeftSideBar />
      {
       renderBanner()
      }
      <h1>Our Products</h1>
      <div className="boxes">
        <Box boxImage={boxImage1} />
        <Box boxImage = {boxImage2}/>
        <Box boxImage = {boxImage3}/>
        <Box boxImage = "https://avn1sh.github.io/HTML-CSS-JavaScript/STOPWATCH/icons/flag.svg"/>
      </div>
      <h1>Shop From Amazon</h1>
      <div className="small-boxes">
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
      </div>
      <h1>Shop From Flipkart</h1>
      <div className="small-boxes">
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
      </div>
    </div>
  );
}

export default App;
