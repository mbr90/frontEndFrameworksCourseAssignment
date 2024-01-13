import { NavLink } from "react-router-dom";
import { NumberOfItems } from "../../utils/NumberOfItems";

export default function Nav() {
  return (
    <nav>
      <ul className="px-10 text-white flex w-full justify-between">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="flex">
          <NavLink className="mr-2" to="/cart">
            Shopping Cart
          </NavLink>

          <NumberOfItems />
        </li>
        <li>
          <NavLink to="/checkout">Checkout</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
