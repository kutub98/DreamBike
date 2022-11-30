import React, { useEffect, useState } from "react";
import SingleSeller from "./SingleSeller";

const AllSeller = () => {
  const [seller, setSeller] = useState([]);
  useEffect((id) => {
    fetch("http://localhost:5000/seller/Seller")
      .then((res) => res.json())
      .then((data) => setSeller(data));
  }, []);

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl my-3 text-black">All Sellers</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-center">SL</th>
            <th className="text-center">Photo</th>
            <th className="text-center">User Name</th>
            <th className="text-center">User Email</th>
            <th className="text-center">Sign Method</th>
            <th className="text-center">Requested for User Role </th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {seller.map((user, idx) => (
            <SingleSeller key={user._id} SSeller={user} idx={idx + 1}></SingleSeller>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
