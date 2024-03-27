import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons/faCertificate";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
const ProductVerified = () => {
  return (
    <div className="product-verified-container">
      <FontAwesomeIcon className="product-verified-certificate" icon={faCertificate} />
      <FontAwesomeIcon className="product-verified-check" icon={faCheck} fade /> 
      <h5>Store's Verified</h5>
    </div>
  )
}

export default ProductVerified
