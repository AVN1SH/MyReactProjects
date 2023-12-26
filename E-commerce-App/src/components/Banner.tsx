import bannerImage1 from '../data/images/banner-image-1.jpg';

interface Props {
  bannerImage : string;
}

const Banner = ({bannerImage} : Props) => {
  return (
    <div>
      <img className="banner-image" src = "require({bannerImage}).defalult"/>
    </div>
  )
}

export default Banner
