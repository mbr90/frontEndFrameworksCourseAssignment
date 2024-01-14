import { useParams } from "react-router-dom";
import FetchSingleProduct from "../../components/FetchSingleProduct";

function Product() {
  const params = useParams();

  return (
    <>
      <main className="min-h-screen bg-sky-50 pt-20">
        <FetchSingleProduct postID={params.id} />
      </main>
    </>
  );
}

export default Product;
