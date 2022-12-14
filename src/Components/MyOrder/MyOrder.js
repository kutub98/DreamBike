import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthContext/AuthContext";

import SingleOrdeCmp from "./SingleOrderComponetnt/SingleOrdeCmp";

const MyOrder = () => {
  const { user } = useContext(authContext);

  const { data: ordered = [], isLoading } = useQuery({
    queryKey: ["orderd", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://dream-bike-server-rose.vercel.app/ordered/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h1 className="text-black font-extrabold text-lg text-center my-3">My Order</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="">SL</th>
                <th className="p-3 text-center">Image</th>
                <th className="p-3 text-center">Customer email</th>
                <th className="p-3 text-center">Product Id</th>
                <th className="p-3 text-center">Product Name</th>
                <th className="p-3 text-center">Issue Date</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Payment</th>
              </tr>
            </thead>
            <tbody>
              {ordered.map((singOrder, idx) => (
                <SingleOrdeCmp key={singOrder._id} singOrder={singOrder} idx={idx + 1}></SingleOrdeCmp>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
