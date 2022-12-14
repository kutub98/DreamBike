import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "./DetailsExplored.css";

// CommonJS

import {
  TbBrandEdge,
  TbReportMoney,
  TbCurrentLocation,
  TbMotorbike,
  TbRotateClockwise,
  TbUserCircle,
} from "react-icons/tb";
import { authContext } from "../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const DetailsExplored = ({ detailsExplored, Already }) => {
  const { user } = useContext(authContext);

  // user)
  const [close, setClose] = useState(true);
  const navigate = useNavigate();

  const { sellerName, bikeName, brandName, date, _id, image, location, marketPrice, resellPrice, used } =
    detailsExplored;

  // handlingBooking for order
  const handlingBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const bikeName = form.bikeName.value;
    const location = form.location.value;
    const number = form.number.value;

    const orderByBookingInfo = {
      customerEmail: email,
      customerName: name,
      priceFixed: price,
      bikeName: bikeName,
      receivedLocation: location,
      customerNumber: number,
      productId: _id,
      productImag: image,
    };

    //saving data for order in database
    const url = "https://dream-bike-server-rose.vercel.app/booked";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bikerToken ${localStorage.setItem("bikerToken", user.email)}`,
      },
      body: JSON.stringify(orderByBookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully booked");
        }
      });

    setClose(false);

    // "name", name,"email", email,"price", price,"bikeName", bikeName, "location", location, "number",number);
  };

  // alert for login
  const alertForLogin = () => {
    const confirm = window.confirm("If You want to booking a order you have to login first, are sure?");
    if (confirm) {
      navigate("/login");
    } else {
      return;
    }

    // toast.message("If You want to booking a order you have to login first")
    // return
  };

  // addedToWishList

  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mainBox flex flex-col-reverse mx-auto lg:flex-row relative">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
            <div>
              <h1 className="flex items-center text-xl font-semibold">
                {" "}
                <TbBrandEdge className="mr-3 text-red-600 w-8 h-8" /> Brand Name:{brandName}
              </h1>
            </div>
            <div>
              <h1 className="flex items-center text-xl font-semibold">
                <TbMotorbike className="mr-3 text-red-600 w-8 h-8" /> Bike Name:{bikeName}
              </h1>
            </div>
            <div>
              <h1 className="flex items-center text-xl font-semibold">
                <TbReportMoney className="mr-3 text-red-600 w-8 h-8" /> Market Price: ${marketPrice}
              </h1>
            </div>
            <div>
              <h1 className="flex items-center text-xl font-semibold">
                <TbReportMoney className="mr-3 text-red-600 w-8 h-8" /> ReselL Price: ${resellPrice}
              </h1>
            </div>
            <div>
              <h1 className="flex items-center text-xl font-semibold">
                <TbRotateClockwise className="mr-3 text-red-600 w-8 h-8" /> Used:{used} only
              </h1>
            </div>
            <div>
              <h1 className="flex items-center text-xl font-semibold">
                <TbUserCircle className="mr-3 text-red-600 w-8 h-8" /> Seller :{sellerName}
              </h1>
            </div>

            <div>
              <h1 className="flex items-center text-xl font-semibold">
                {" "}
                <TbCurrentLocation className="mr-3 text-red-600 w-8 h-8" />
                Reported Place is : <span>{location}</span>{" "}
              </h1>
            </div>
          </div>

          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 sm:min-h-96" />
            </div>
          </div>
        </div>
      </section>
      <div className=" ">
        <div className=" w-full">
          {/* The button to open modal */}

          {user?.uid ? (
            <label htmlFor="bookNow" className="btn w-1/2 flex my-3 mx-auto">
              Book Now
            </label>
          ) : (
            <label htmlFor="" onClick={alertForLogin} className="btn w-1/2 flex my-3 mx-auto">
              Book Now
            </label>
          )}

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="bookNow" className="modal-toggle" />
          <label htmlFor="bookNow" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center"> Book For {bikeName}</h1>
                <form onSubmit={handlingBooking} className="space-y-6 ng-untouched ng-pristine ng-valid">
                  <div className="space-y-1 text-sm">
                    <label forHtml="name" className="block dark:text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.uid ? user?.displayName : "User"}
                      readOnly
                      id="name"
                      placeholder="name"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label forHtml="email" className="block dark:text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={user?.uid ? user.email : "User"}
                      readOnly
                      placeholder="email"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border-green-400"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label forHtml="bikeName" className="block dark:text-gray-400">
                      BikeName
                    </label>
                    <input
                      type="bikeName"
                      name="bikeName"
                      id="bikeName"
                      defaultValue={`order for ${bikeName}`}
                      readOnly
                      placeholder="bikeName"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border-green-400"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label forHtml="price" className="block dark:text-gray-400">
                      Fixed price
                    </label>
                    <input
                      type="price"
                      name="price"
                      id="price"
                      defaultValue={`Fixed Price ${resellPrice}`}
                      readOnly
                      placeholder="price"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border-green-400"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label forHtml="location" className="block dark:text-gray-400">
                      Location
                    </label>
                    <input
                      type="location"
                      name="location"
                      id="location"
                      required
                      defaultValue={`Received from ${location} location`}
                      readOnly
                      placeholder="location"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border-green-400"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label forHtml="Number" className="block dark:text-gray-400">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      required
                      id="Number"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border-green-400"
                    />
                  </div>
                  <button className="block w-full p-3 bg-green-600 text-white text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
                    Submit
                  </button>
                  <label htmlFor="bookNow" className="btn btn-sm w-96 mb-6 bg-red-600 py-4 absolute ">
                    Close
                  </label>
                </form>
              </div>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DetailsExplored;
