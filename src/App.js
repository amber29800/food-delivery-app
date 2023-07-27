import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // -> Default import
//import {Header} from "./components/Header" ->  Named import
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResaturantMenu from "./components/RestaurantMenu";

// lazy loading helps to make use of a particular component when needed. 
// It just bundles that component and send it to the browser at the time of need.

const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <ResaturantMenu/>
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

//we can only write JS expressions  not inside '{}' statements.
/*eg -> a = 20;
      console.leg(a);
      the above code is not allowed inside '{}'.
*/