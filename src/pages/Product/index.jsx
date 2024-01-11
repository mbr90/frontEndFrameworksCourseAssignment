import { useParams } from "react-router-dom";
import FetchSingleProduct from "../../components/FetchSingleProduct";

function Product() {
  const params = useParams();

  return (
    <>
      <div>This is our individual product page: {params.id}</div>
      <FetchSingleProduct postID={params.id} />
    </>
  );
}

export default Product;
