import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Layout from "./components/layout/Layout";
import Checkout from "./pages/checkout/Checkout";
import { AuthProvider } from "./context/authContext/AuthContext";
import { Provider } from "react-redux";
import { store } from "./reducers/Store";
import Payment from "./pages/payment/Payment";
import OrderList from "./pages/orderList/OrderList";
import Profile from "./pages/profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "?/:category?/:subcategory?/:collection?",
          element: <ProductList />,
        },
        {
          path: "search-results?/:searchText?",
          element: <ProductList />,
        },
        {
          path: "productdetail?/:productSlug?/:productId?",
          element: <ProductDetails />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "",
          children: [
            {
              path: "checkout/address",
              element: <Checkout />,
            },
            {
              path: "checkout/payment",
              element: <Payment />,
            },
          ],
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "orders",
          element: <OrderList />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
