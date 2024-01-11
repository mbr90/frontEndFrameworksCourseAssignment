
import { Routes, Route, Link, Outlet} from "react-router-dom"

function Home() {
  return <h1>This is our home page</h1>
}

function Product() {
  return <div>This is our individual product page</div>
}

function ShoppingCart() {
  return <div>This is our individual shopping cart</div>
}

function Checkout() {
  return <div>This is our individual checkout page</div>
}

function Contact() {
  return <div>This is our individual contact form</div>
}

function RouteNotFound() {
  return <div>Page not found</div>
}

function Nav() {
  return(
    <nav>
      <ul className="px-10 text-white flex w-full justify-between">
        <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
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
      </ul></nav>
  )
}

function Header() {
  return (
    <header className="bg-black">
      <div>Header with Logo and nav</div>
      <Nav />
    </header>
  )
}

function Footer() {
  return <footer>Website footer</footer>
}

function Layout() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}


function App() {

  return (
    <>      <Layout />
        <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
   
    


  
   
    </>

    
)}

export default App
