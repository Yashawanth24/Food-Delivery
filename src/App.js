import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import Payment1 from "./components/Payment1";
import appStore from "./components/appStore";
import { CartProvider } from "./components/cartContext";




const App = () => {
  return (
    <Provider store={appStore}>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
     
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/sign",
        element: <SignIn />
      },
      {
        path: "/payment",
        element: <Payment1 />
      },
    ],
    errorElement: <Error />
  },
]);

const MainApp = () => {
  return <RouterProvider router={appRouter} />;
};

export default MainApp;
