import Nav from "../Nav";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-[#DA9F53] h-20 fixed top-0 w-full flex justify-center gap-2 shadow-xl z-50">
      <Link className="no-underline my-auto" to="/">
        {" "}
        <div className="text-white my-auto flex min-w-[150px]">
          {" "}
          <MdCurrencyExchange className="ml-4 h-10 w-10" />
          <p className="ml-1 my-auto w-full text-xl font-bold"> The Store</p>
        </div>
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
