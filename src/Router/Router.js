import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Brand from "../Components/Brand/Brand";
import Brands from "../Components/Brands/Brands";
import Categories from "../Components/Categories/Categories";
import Standard from "../Components/CategoryType/Standard/Standard";
import Home from "../Components/Home/Home";
import MoreDetails from "../Components/MoreDetails/MoreDetails";
import Login from "../Components/Page/Login/Login";
import Register from "../Components/Page/Register/Register";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Error from "../Shared/Error/Error";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        { path: "Home", element: <Home></Home> },
        { path: "/", element: <Home></Home> },
        { path: "About", element: <About></About> },
        { path: "Brand", element: <Brand></Brand> },
        { path: "Blog", element: <Blog></Blog> },
        { path: "Categories", element: <Categories></Categories> },
        { path: "Login", element: <Login></Login> },
        { path: "Register", element: <Register></Register> },
        { path: "/allCategories/:serviceId", element: <Standard></Standard>,
        loader: ({ params }) => fetch(`http://localhost:5000/allCategories/${params.serviceId}`)},
        { path: "/productId/:_id", element: <MoreDetails></MoreDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/productId/${params._id}`)},
      ],
    },
    {path:"*", element: <Error></Error>}
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};


export default Router;
