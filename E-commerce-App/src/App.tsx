import NavigationBar from "./components/NavigationBar.tsx";
import LeftSideBar from "./components/LeftSideBar.tsx";
import Banner from "./components/Banner.tsx";
import {useState} from "react";
import Box from "./components/Box.tsx";
import SmallBox from "./components/SmallBox.tsx"
import bannerImage1 from '../data/images/banner-image-1.jpg';


function App() {
  let [slideCount, setSlideCount] = useState(0);
  const bannerInfo = [
    bannerImage1,
    "Second Banner",
    "Third Banner",
    "Forth Banner",
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
        <Box />
        <Box />
        <Box />
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
