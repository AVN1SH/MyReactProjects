import logoIcon from '../data/icons/shop-bag.svg';

const NavigationBar = () => {
  return (
    <div className = "nav-bar">
      <div className = "left-part">
        <img className = "logo" src = {logoIcon}></img>
        <p className = "name">STORE</p>
      </div>
      <div className = "middle-part">
        <input type = "search" placeholder='Search'/>
        <img src = "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/search_FILL0_wght400_GRAD0_opsz24.svg" />
      </div>
      <div className = "right-part">
        <img src = "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/person_add_FILL0_wght400_GRAD0_opsz24.svg" />
        <img src = "https://avn1sh.github.io/MyReactProjects/E-commerce-App/src/data/icons/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg" />
      </div>
    </div>
  )
}

export default NavigationBar;
