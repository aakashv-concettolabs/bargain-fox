import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import ProductList from "./pages/productlist/ProductList";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Address from "./pages/address/Address";
import BreadcrumbComponent from "./components/breadcrumbComponent/BreadcrumbComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BreadcrumbComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productList">
            <Route path="/productList" element={<ProductList />} />
            <Route
              path="/productList/productdetail"
              element={<ProductDetails />}
            />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/address" element={<Address />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
