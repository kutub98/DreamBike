import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleUser from "./SingleUser/SingleUser";

const AllUsers = () => {
  

  const { data: allUser = [], refetch, isLoading } = useQuery({
    queryKey: ['appointmentOptions'],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/allUser");
        const data = await res.json();
        return data
    }
  });

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl my-3 text-black">All Users</h1>
      <div className="overflow-x-auto w-full">
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
            {allUser.map((user, idx) => (
              <SingleUser key={user._id} SingleUser={user} idx={idx + 1} refetch={refetch}></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
