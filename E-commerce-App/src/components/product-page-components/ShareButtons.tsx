//icons section.......
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp"
import { faShareNodes } from "@fortawesome/free-solid-svg-icons/faShareNodes"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const ShareButtons = () => {
  return (
    <div className="product-page-share-button-container">
      <FontAwesomeIcon className="share-button-whatsapp" icon={faWhatsapp} />
      <FontAwesomeIcon className="share-button-insta" icon={faInstagram} />
      <FontAwesomeIcon className="share-button-facebook" icon={faFacebook} />
      <FontAwesomeIcon className="share-button-share-node" icon={faShareNodes} />
    </div>
  )
}

export default ShareButtons
