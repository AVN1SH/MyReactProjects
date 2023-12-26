interface Props {
  bannerImage : string;
}

const Banner = ({bannerImage} : Props) => {
  return (
    <div>
      <div className="banner-image">
        <img className="banner-image" src = {bannerImage}/>
      </div>
    </div>
  )
}

export default Banner
