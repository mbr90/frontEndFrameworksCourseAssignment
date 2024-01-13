import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function FetchSingleProduct(props) {
  const [item, setItem] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const { dispatch } = useCart();

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);

        setIsLoading(true);
        const response = await fetch(url + `/${props.postID}`);
        const json = await response.json();
        setItem(json);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading posts..</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div>
        <h1>{item.title}</h1>
        <img
          className="h-96 w-96 object-contain"
          src={item.imageUrl}
          alt={item.description}
        />
        <p>{item.description}</p>
        <p>{item.price}</p>
        <p>Discounted Price:{item.discountedPrice}</p>
        <p>Rating: {item.rating}</p>
        <button onClick={() => dispatch({ type: "addProduct", payload: item })}>
          Buy!
        </button>
      </div>
    </>
  );
}
