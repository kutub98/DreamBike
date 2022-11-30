import React, { useEffect, useState } from "react";
import SingleBuyers from "./SingleBuyers";

const AllBuyers = () => {
  const [buyers, setSeller] = useState([]);
  useEffect((id) => {
    fetch(" https://dream-bike-server-rose.vercel.app/buyer/Buyer/")
      .then((res) => res.json())
      .then((data) => setSeller(data));
  }, []);

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl my-3 text-black">All Buyers</h1>
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
          {buyers.map((user, idx) => (
            <SingleBuyers key={user._id} sBuyers={user} idx={idx + 1}></SingleBuyers>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
