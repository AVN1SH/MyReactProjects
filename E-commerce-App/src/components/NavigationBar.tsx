import logoIcon from '../data/icons/shop-bag.svg';
import '../App.css';

const NavigationBar = () => {
  return (
    <div className = "nav-bar">
      <div className = "left-part">
        <img className = "logo" src = {logoIcon}></img>
        <p className = "name">STORE</p>
      </div>
      <div className = "middle-part">

      </div>
      <div className = "right-part">

      </div>
    </div>
  )
}

export default NavigationBar;
