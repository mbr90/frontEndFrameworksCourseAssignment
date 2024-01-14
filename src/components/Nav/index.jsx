import { NavLink } from "react-router-dom";

import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../../context/CartContext";

export default function Nav() {
  const { state } = useCart();
  const numberOfItems = state.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className="flex w-full">
      <ul className=" my-auto text-white flex w-full justify-start gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <ul className="p-4 text-white flex w-full justify-end my-auto">
        {" "}
        <li className="flex relative">
          <NavLink className="mr-2" to="/cart">
            <MdShoppingCart className="h-10 w-10 hover:h-12 hover:w-12" />
          </NavLink>

          <div className="absolute top-0 right-0 bg-sky-900 flex pb-1 rounded-full w-6 h-6">
            <p className="w-2 h-2 mx-auto">{numberOfItems}</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}
