import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Details from "../../Details/Details";
import './standard.css'
const Standard = () => {
  const details = useLoaderData();
  const { CategoryName, _id, BikeDetails, serviceId} = details;
  // console.log(data);
  return (
    <div>
      <div className="standard"></div>
      <div className="px-[10%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {
        details.map(SSD => <Details key={SSD._id} details={SSD}></Details>)
      }
      </div>
      </div>
    </div>
  );
};

export default Standard;
