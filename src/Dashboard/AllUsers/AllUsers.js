import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleUser from "./SingleUser/SingleUser";

const AllUsers = () => {
  const [alluser, setUsers] = useState([]);

  const userUrl = "https://dream-bike-server-rose.vercel.app/allUser";
  useEffect(() => {
    fetch(userUrl)
      .then((data) => data.json())
      .then((res) => setUsers(res));
  }, []);

  //     const handleForMakingAdmin =(id)=>{
  //       fetch(`https://dream-bike-server-rose.vercel.app/allUser/admin/${id}`, {
  //           method: 'PUT',
  //           headers: {
  //               authorization: `admin ${localStorage.getItem('bikerToken')}`
  //           }
  //       })
  //       .then(res => res.json())
  //       .then(data => {
  //          if(data.modifiedCount > 0){
  //           toast.success("Added as a Admin")

  //          }else{
  //           toast.error('Sorry You are not authorized')
  //          }
  //       })
  // }

  // const { data: allUser = [], refetch, isLoading } = useQuery({
  //   queryKey: ['appointmentOptions'],
  //   queryFn: async () => {
  //       const res = await fetch("https://dream-bike-server-rose.vercel.app/allUser");
  //       const data = await res.json();
  //       return data
  //   }
  // });

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
            {alluser.map((user, idx) => (
              <SingleUser key={user._id} SingleUser={user} idx={idx + 1}></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
