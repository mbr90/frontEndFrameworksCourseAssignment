// import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";

// const url = "https://api.noroff.dev/api/v1/online-shop";

export default function ShoppingCart() {
  // const [data, setData] = useState([]);
  const { state, dispatch } = useCart();

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       console.log("There was an error");
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <div>
      <div>
        <hr />
        <button onClick={() => dispatch({ type: "clearCart" })}>
          Clear cart
        </button>
        <button onClick={() => dispatch({ type: "getTotal" })}>
          Get total
        </button>
      </div>
      <div>{state.total}</div>
      <hr />
      <div>
        {state.cart.map((product) => (
          <div key={product.id}>
            {product.quantity} - {product.title} - {product.discountedPrice}
            <button
              onClick={() =>
                dispatch({ type: "removeProduct", payload: product })
              }
            >
              Remove {product.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
