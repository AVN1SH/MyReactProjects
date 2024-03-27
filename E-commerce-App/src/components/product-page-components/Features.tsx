interface Props {
  description : [{
    image : string;
    title : string;
    content : string; 
  }];
}

const Features = ({description} : Props) => {
  return (
    <div className="product-page-features-outer-container">
      <h2>Features</h2>
      {description.map((features) => (
        <div className="product-page-features-container" key={features.image}>
          <img className="product-page-features-image" src={features.image} />
          <div className="product-page-features-title-content">
            <h3 className="product-page-features-title">
              {features.title}
            </h3>
            <div className="product-page-features-content">
              <p>{features.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
