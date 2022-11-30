import { da } from "date-fns/locale";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Form, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext/AuthContext";

const AddProduct = () => {
  const { user } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const addingProduct = (event) => {
    const name = event.SellerName;
    const bikeName = event.bikeName;
    const email = event.email;
    const CategoryName = event.CategoryName;
    const brandName = event.brandName;
    const location = event.location;
    const resellPrice = event.resellPrice;
    const marketPrice = event.marketPrice;
    const image = event.image;
    const used = event.used;

    console.log(name);

    const formData = new FormData();
    formData.append("image", event.image[0]);

    const url = "https://api.imgbb.com/1/upload?key=66ec6767006d71f52c699460fc28550b";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((data) => data.json())
      .then((result) => {
        const image = result.data.display_url;

        //Posting a product to Allbikes collection
        const productsDetails = {
          sellerName: name,
          bikeName: bikeName,
          CategoryName: CategoryName,
          brandName: brandName,
          location: location,
          resellPrice: resellPrice,
          marketPrice: marketPrice,
          image: image,
          email: email,
          used: used,
        };

        const url = "http://localhost:5000/allBikes";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productsDetails),
        })
          .then((data) => data.json())
          .then((res) => {
            if (res.acknowledged) {
              toast.success("Successfully Product Add");
              navigate("/Dashboard/MyProduct");
            }
          })
          .catch((error) => {
            const errors = error.message;
            toast.error(errors);
          });
      });
  };
  return (
    <div className="p-12 bg-violet-50">
      <form
        onSubmit={handleSubmit(addingProduct)}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className=" dark:bg-gray-900">
          <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="shadow-md">
              <label forHtml="SellerName" className="text-sm">
                Seller Name
              </label>
              <input
                name="SellerName"
                id="SellerName"
                type="text"
                placeholder="Seller Name"
                required
                {...register("SellerName", { required: true, message: "Name required" })}
                defaultValue={user?.uid ? user?.displayName : "Provide your name"}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="shadow-md">
              <label forHtml="email" className="text-sm">
                Email
              </label>
              <input
                name="email"
                id="email"
                required
                defaultValue={user?.uid ? user.email : "Provide your name"}
                type="email"
                placeholder="email@gmail.com"
                {...register("email", { required: true, message: "Name required" })}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="shadow-md">
              <label forHtml="bikeName" className="text-sm">
                Bike Name
              </label>
              <input
                name="bikeName"
                id="bikeName"
                type="text"
                required
                {...register("bikeName", { required: true, message: "Name required" })}
                placeholder="bikeName"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="shadow-md">
              <label forHtml="brandName" className="text-sm">
                Brand Name
              </label>
              <input
                name="brandName"
                id="brandName"
                type="text"
                required
                placeholder="Brand Name"
                {...register("brandName", { required: true, message: "Name required" })}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 dark:border-gray-700 dark:text-green-500"
              />
            </div>
            <div className="">
              <label forHtml="CategoryName" className=" text-black text-sm font-bold">
                Select Product Category
              </label>
              <select
                {...register("CategoryName")}
                className="CategoryName w-full py-3 px-2 border border-primary-focus my-2 rounded-md focus:ring focus:ring-opacity-75  dark:border-primary-focus "
              >
                <option disabled selected value="CategoryName role">
                  Select Category
                </option>
                <option value="StandardBike">Standard Bike</option>
                <option value="DualPurposeBike">Dual Purpose Bike</option>
                <option value="SportsBike">Sports Bike</option>
                <option value="CruiserBike">Cruiser Bike</option>
              </select>
            </div>

            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Image
              </label>
              <input
                type="file"
                name="image"
                required
                id="image"
                placeholder="Your image"
                {...register("image")}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                data-temp-mail-org="0"
              />
            </div>

            <div className="shadow-md">
              <label forHtml="marketPrice" className="text-sm">
                Market Price
              </label>
              <input
                name="marketPrice"
                id="marketPrice"
                type="number"
                {...register("marketPrice")}
                placeholder="Market Price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-500 dark:border-green-500 dark:text-green-500"
              />
            </div>
            <div className="shadow-md">
              <label forHtml="resellPrice" className="text-sm">
                Resell Price
              </label>
              <input
                name="resellPrice"
                id="resellPrice"
                type="number"
                {...register("resellPrice")}
                placeholder="Resell Price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-500 dark:border-green-500 dark:text-green-500"
              />
            </div>
            <div className="shadow-md">
              <label forHtml="location" className="text-sm">
                location
              </label>
              <input
                name="location"
                id="location"
                type="text"
                {...register("location")}
                placeholder="location"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-500 dark:border-green-500 dark:text-green-500"
              />
            </div>
            <div className=" shadow-md ">
              <label forHtml="used" className="text-sm">
                Product used for month/year
              </label>
              <input
                name="used"
                id="used"
                type="text"
                {...register("used")}
                placeholder="used"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-500 dark:border-green-500 dark:text-green-500"
              />
            </div>

            <button
              className="col-span-full hover:hover-bordered 
              bg-white hover:bg-gray-600 active:bg-white focus:outline-none focus:ring focus:ring-violet-300shadow-2xl py-3 rounded text-black hover:text-white"
              type="submit"
            >
              SUBMIT PRODUCT
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddProduct;
