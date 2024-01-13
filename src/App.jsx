import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import RouteNotFound from "./pages/RouteNotFound";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
