import React, { useContext, useState } from "react";
import { Form } from "react-router-dom";
import { authContext } from "../../Context/AuthContext/AuthContext";

const AddProduct = () => {
  const { user } = useContext(authContext);

  const [name, setName] = useState();
  const addingProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const SellerName = form.name.value;
    const bikeName = form.bikeName.value;
    const brandName = form.brandName.value;
    const location = form.location.value;
    const marketPrice = form.marketPrice.value;
    const resellPrice = form.resellPrice.value;
    const CategoryName = form.selected.category;
    const used = form.used.value;
    // const select = form.selected.value;
    // const image = form.image.file[[0]];
    console.log(SellerName, bikeName, brandName, location, marketPrice, resellPrice, used, CategoryName);

    // 
    // 
    // date
    // _id
    // image
    // location
    // marketPrice
    // resellPrice
    // used
  };
  return (
    <div className="p-12 bg-violet-50">
      <form
      onSubmit={addingProduct}
     
      className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
    >
      <fieldset className=" dark:bg-gray-900">
        <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="shadow-md">
            <label for="name" className="text-sm">
              Seller Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Seller Name"
              required
              defaultValue={user?.uid ? user?.displayName : 'Provide your name'}
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="shadow-md">
            <label for="email" className="text-sm">
              Email 
            </label>
            <input
              name="email"
              id="email"
              required
              defaultValue={user?.uid ? user.email : 'Provide your name'}
              type="email"
              placeholder="email@gmail.com"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="shadow-md">
            <label for="bikeName" className="text-sm">
              Bike Name
            </label>
            <input
              name="bikeName"
              id="bikeName"
              type="text"
              required
              placeholder="bikeName"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="shadow-md">
            <label for="brandName" className="text-sm">
              Brand Name
            </label>
            <input
              name="brandName"
              id="brandName"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 dark:border-gray-700 dark:text-green-500"
            />
          </div>
          <div className="shadow-md">
              <label forHtml="category" className=" text-black text-sm ">
               Select Category
              </label>
              <select
                id =" category" className="category w-full  border-2 border-gray-400"
              >
               
                <option value="category">Standard Bike</option>
                <option value="category">Dual Purpose Bike</option>
                <option value="category">Sports Bike</option>
                <option value="category">Cruiser Bike</option>
              </select>
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                placeholder="Your image"
               
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                data-temp-mail-org="0"
              />
              
            </div>
          
          <div className="shadow-md">
            <label for="marketPrice" className="text-sm">
              Market Price
            </label>
            <input
              name="marketPrice"
              id="marketPrice"
              type="text"
              placeholder="Market Price"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-500 dark:border-green-500 dark:text-green-500"
            />
          </div>
          <div className="shadow-md">
            <label for="resellPrice" className="text-sm">
              Resell Price
            </label>
            <input
              name="resellPrice"
              id="resellPrice"
              type="text"
              placeholder="Resell Price"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-500 dark:border-green-500 dark:text-green-500"
            />
          </div>
          <div className="shadow-md">
            <label for="location" className="text-sm">
            location
            </label>
            <input
              name="location"
              id="location"
              type="text"
              placeholder="location"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-500 dark:border-green-500 dark:text-green-500"
            />
          </div>
          <div className=" shadow-md ">
            <label for="used" className="text-sm">
            Product used for month/year
            </label>
            <input
              name="used"
              id="used"
              type="text"
              placeholder="used"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-500 dark:border-green-500 dark:text-green-500"
            />
          </div>

          
          <button className="col-span-full hover:hover-bordered bg-white shadow-2xl py-3 rounded text-black" type="submit">
            SUBMIT PRODUCT
          </button>
        </div>
      </fieldset>
    </form>
    </div>
  );
};

export default AddProduct;
