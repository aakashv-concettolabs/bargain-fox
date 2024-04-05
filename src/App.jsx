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
          children: [
            {
              path: "",
              element: <Cart />,
            },
            {
              path: "/cart/checkout",
              element: <Checkout />,
            },
          ],
        },
        {
          path: "wishlist",
          element: <Wishlist />,
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
