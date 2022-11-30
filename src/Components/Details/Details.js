import React from "react";
import { Link } from "react-router-dom";

const Details = ({ details }) => {
  console.log(details._id);
  return (
    <div>
      <div className="my-10 ">
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
      </div>
    </div>
  );
};

export default Details;
