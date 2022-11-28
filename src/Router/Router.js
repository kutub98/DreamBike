import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Brand from "../Components/AllProducts/AllProducts";
import Brands from "../Components/Brands/Brands";
import Categories from "../Components/Categories/Categories";
import Standard from "../Components/CategoryType/Standard/Standard";
import Home from "../Components/Home/Home";
import MoreDetails from "../Components/MoreDetails/MoreDetails";
import MyOrder from "../Components/MyOrder/MyOrder";
import Login from "../Components/Page/Login/Login";
import Register from "../Components/Page/Register/Register";
import AdminRoute from "../Components/PrivateRoute/AdminRoute";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../Dashboard/AllSeller/AllSeller";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import DashLayout from "../Dashboard/DashboardLayout/DashLayout";
import MyProduct from "../Dashboard/MyProduct/MyProduct";
import ReportedItems from "../Dashboard/ReportedItems/ReportedItems";
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
        { path: "MyOrder", element: <MyOrder></MyOrder>,},
        { path: "/allCategories/:CategoryName", element: <Standard></Standard>,
        loader: ({ params }) => fetch(`http://localhost:5000/allCategories/${params.CategoryName}`)},
        { path: "/productId/:_id", element: <MoreDetails></MoreDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/productId/${params._id}`)},
      ],
      
    },
    {path:"*", element: <Error></Error>},
    {
      path: "Dashboard", element: <DashLayout></DashLayout>, 
      children: [
        {path: '/Dashboard', element: <MyOrder></MyOrder>},
        {path: '/Dashboard/AddProduct', element: <AddProduct></AddProduct>},
        {path: '/Dashboard/MyProduct', element: <MyProduct></MyProduct>},
        {path: '/Dashboard/Reported', element: <ReportedItems></ReportedItems>},
        {path: '/Dashboard/AllUsers', element: <AllUsers></AllUsers> },
        {path: '/Dashboard/AllSeller', element: <AllSeller></AllSeller>},
        {path: '/Dashboard/AllBuyers', element: <AllBuyers></AllBuyers>},
        
      ]
    }

  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};


export default Router;
