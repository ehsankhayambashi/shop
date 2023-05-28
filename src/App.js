import "./App.css";
import Home from "./Pages/Home/Home";
// import Search from "./Pages/Search/Search";
// import Product from "./Pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./data/dummy";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
// import Test from "./components/Navbar/Test";
import Profile from "./Pages/Profile/Profile";
import Orders from "./Pages/Profile/Orders";
import Addresses from "./Pages/Profile/Addresses";
import WishList from "./Pages/Profile/WishList";
import PageLayout from "./Pages/Profile/PageLayout";
import OrderDetails from "./Pages/Profile/OrderDetails";
import PersonalInfo from "./Pages/Profile/PersonalInfo";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import NotFound from "./Pages/404/NotFound";
// import PersonalInfo from "./Pages/Profile/PersonalInfo";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const ProfileLayout = () => {
  return (
    <>
      <Navbar />
      <PageLayout />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/search/:category",
      //   element: <Search />,
      // },
      // {
      //   path: "/product/:id",
      //   element: <Product />,
      // },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/cart", element: <Cart /> },
  {
    path: "profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "orders/:id",
        element: <OrderDetails />,
      },
      {
        path: "addresses",
        element: <Addresses />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// });
function App() {
  return (
    <div className="app">
      {/* <CacheProvider value={cacheRtl}> */}
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      {/* </CacheProvider> */}
    </div>
  );
}

export default App;
