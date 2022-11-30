import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import SingleCategory from "./SingleCategory/SingleCategory";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dream-bike-server-rose.vercel.app/allCategories")
      .then((data) => data.json())
      .then((res) => setCategories(res));
  }, []);

  return (
    <div className=" px-[10%] py-14 bg-slate-100 ">
      <div className="text-center">
        <h1 className="text-lg mb-4 text-black font-medium">What Are you looking for?</h1>
        <h1 className="text-5xl text-red-700 font-medium">All Categories</h1>
      </div>
      <div className=" gap-4 my-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ">
        {categories.map((category) => (
          <SingleCategory key={category._id} category={category}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
