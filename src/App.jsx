import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import RouteNotFound from "./pages/RouteNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
