import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContext/AuthContext";
import SingleOrdeCmp from "./SingleOrderComponetnt/SingleOrdeCmp";

const MyOrder = () => {
    const {user} = useContext(authContext)

    const {data: ordered =[], isLoading}= useQuery({
        queryKey: ['orderd', user?.email],
        queryFn : async()=>{
          const res = await fetch(`http://localhost:5000/ordered/${user?.email}`)
          const data = await res.json()
          return data;
        }
      })
      console.log(ordered)
      let idx = 1;
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
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
              {
                ordered.map(singOrder  => <SingleOrdeCmp key={singOrder._id} singOrder={singOrder} idx={ idx+ 1} ></SingleOrdeCmp>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
