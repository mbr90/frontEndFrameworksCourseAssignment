import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import { MdAdd, MdRemove } from "react-icons/md";

export default function ShoppingCart() {
  const { state, dispatch } = useCart();
  console.log(state);

  return (
    <main className="min-h-screen bg-sky-50 pt-20  mt-20">
      <div className="bg-sky-900 p-6  w-full  mx-auto md:max-w-[650px] shadow-xl text-white">
        <div>
          {state.cart.map((product) => (
            <div className="flex h-20" key={product.id}>
              <div className="my-auto w-48">
                {" "}
                {product.quantity} - {product.title} -{" "}
                {formatCurrency(product.discountedPrice)}{" "}
              </div>
              <div className="ml-5 ">
                <img
                  className="h-16 w-16 object-cover mx-auto my-auto"
                  src={product.imageUrl}
                  alt={product.description}
                />
              </div>

              <div className="flex justify-between my-auto ml-4 mr-auto gap-2">
                <button
                  onClick={() =>
                    dispatch({ type: "removeProduct", payload: product })
                  }
                >
                  <MdRemove className="h-8 w-8 hover:text-[#DA9F53]" />
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "addProduct", payload: product })
                  }
                >
                  <MdAdd className="h-8 w-8 hover:text-[#DA9F53]" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-2">
          <div className="h-16">
            <button
              className=" flex justify-center hover:cursor-pointer w-32  my-auto hover:border-solid hover:border-2 p-2 mb-2 bg-[#DA9F53] font-bold hover:border-white text-white"
              onClick={() => dispatch({ type: "clearCart" })}
            >
              Clear cart
            </button>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <span className="font-bold">{formatCurrency(state.total)}</span>
        </div>
        <div className="flex justify-between text-xl">
          <Link className="hover:cursor-pointer hover:underline my-auto" to="/">
            {" "}
            {`<-`} Continue shopping?
          </Link>

          {state.cart && state.cart.length > 0 && (
            <div className="w-40 flex justify-end h-16">
              <Link
                onClick={() => dispatch({ type: "clearCart" })}
                className=" flex justify-center hover:cursor-pointer w-32  my-auto hover:border-solid hover:border-2 p-2 mb-2 bg-[#DA9F53] font-bold hover:border-white text-white"
                to="/checkout"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
