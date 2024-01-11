import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="px-10 text-white flex w-full justify-between">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/cart">Shopping Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
