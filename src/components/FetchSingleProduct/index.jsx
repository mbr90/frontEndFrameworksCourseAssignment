import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { Link } from "react-router-dom";

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
      <div className="bg-sky-900 w-full max-w-[800px] mx-auto text-white shadow-xl mt-10 p-4">
        <div className="flex flex-col gap-4">
          <h1 className="font text-xl mx-auto">{item.title}</h1>
          <img
            className="h-96 w-96 object-contain mx-auto"
            src={item.imageUrl}
            alt={item.description}
          />
          {item.discountedPrice != item.price ? (
            <p className="text-white">
              Discount Price:{" "}
              <span className="font-bold">
                {formatCurrency(item.discountedPrice)}
              </span>{" "}
              Save:{" "}
              <span className="font-bold">
                {formatCurrency(item.price - item.discountedPrice)}{" "}
              </span>
            </p>
          ) : (
            <p className="text-white">
              Price:{" "}
              <span className="font-bold">{formatCurrency(item.price)}</span>
            </p>
          )}
          <p>Rating: {item.rating}</p>

          <div className="flex justify-between text-xl">
            <Link
              className="hover:cursor-pointer hover:underline my-auto"
              to="/"
            >
              {" "}
              {`<-`} Continue shopping?
            </Link>
            <div className="w-40 flex justify-end h-16">
              <Link
                onClick={() => dispatch({ type: "addProduct", payload: item })}
                className=" flex justify-center hover:cursor-pointer w-32  my-auto hover:border-solid hover:border-2 p-2 mb-2 bg-[#DA9F53] font-bold hover:border-white text-white"
                to="/cart"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {item.reviews && item.reviews.length > 0 && (
        <div className="bg-sky-900 w-full max-w-[800px] mx-auto text-white shadow-xl mt-10 p-4 flex flex-col gap-3">
          <h1 className="text-xl">User Reviews:</h1>
          <ul className="flex flex-col gap-2">
            {item.reviews.map((review) => (
              <li key={review.id}>
                <h2>{review.username} says:</h2>
                <p>{review.description}</p>
                <p>Rating: {review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
