import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Brands from "../Components/Brands/Brands";
import Categories from "../Components/Categories/Categories";
import Home from "../Components/Home/Home";
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
        { path: "Brand", element: <Brands></Brands> },
        { path: "Blog", element: <Blog></Blog> },
        { path: "Categories", element: <Categories></Categories> },
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
