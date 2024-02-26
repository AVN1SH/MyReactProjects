import { useParams } from "react-router-dom";

const Products = () => {

  const {id} = useParams();

  return (
    <div>
      id : {id}
    </div>
  )
}

export default Products
