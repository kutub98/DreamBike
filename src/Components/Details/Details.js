import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaHeart, FaHeartbeat, FaRegHeart } from "react-icons/fa";
const Details = ({ details }) => {
  const [addToList, setAddToList] = useState(false);
  const [reportItem, setReportItem] = useState(false);

  const addedToWishList = () => {
    fetch("https://dream-bike-server-rose.vercel.app/wishListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("welcome Added to the your wish list");
        }
        console.log(data);
      });
  };

  //removedWishList
  const removedWishList = () => {
    toast.error("Removed to the your wish list");
  };

  const reportItems = () => {};
  const reported = () => {
    toast.success("report now Reported");
  };
  const report = () => {
    toast.error("Already Reported");
  };

  console.log(details._id);
  return (
    <div>
      <div className="my-10 cardBox ">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={details.image} alt="Shoes" className="w-full h-56" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {details.bikeName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>YDBIKE is best platform for all categories motorbike</p>
            <div className=" w-full">
              <Link to={`/productId/${details._id}`}>
                <button className="btn w-full bg-red-600 text-white border-0">More Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="reportANDwishlistBox">
          <div className="ReportAndWishlists ">
            <div className="flex justify-center my-16 mx-auto">
            <div onClick={() => setAddToList(!addToList)} className="wishList">
              {addToList ? (
                <FaHeart className="heart" onClick={removedWishList} />
              ) : (
                <FaRegHeart className="heart" onClick={addedToWishList} />
              )}
              <h1 className="wishListText ">Add to Wishlist</h1>
            </div>

            <div onClick={() => setReportItem(!reportItem)} className="Report">
              {reportItem ? (
                <h1 onClick={reported} className="reported text-white font-bold">
                  {" "}
                  Reported
                </h1>
              ) : (
                <h1 className="text-white font-bold" onClick={report}>Report</h1> 
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
