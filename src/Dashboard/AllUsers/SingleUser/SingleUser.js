import React, { useState } from "react";
import toast from "react-hot-toast";

const SingleUser = ({ SingleUser }) => {

  const { displayName, idx, _id,  photoURL, role, email, signMethod } = SingleUser;

  
  console.log(SingleUser);
  const userDelete = () => {
    const agree = window.confirm(`are you sure want to delete ${displayName}`);

    if (agree) {
      fetch(`http://localhost:5000/allUser/=${_id}`, {
          method: 'DELETE',
          headers: {
            authorization: ` bearer ${localStorage.getItem("bikerToken")}`,
          }
      })
      .then(res => res.json())
      .then(data => {
         if(data.modifiedCount > 0){
          toast.success(`Successfully delete ${displayName}`)
         
         }else{
          toast.error('Sorry You are not authorized')
         }
      })
    }
  };
  return (
    <tr>
      <th className="text-center">{idx}</th>
      <td className="text-center">
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{displayName}</td>
      <td className="text-center">{email}</td>
      <td className="text-center">{signMethod}</td>
      <td className="text-center">{role}</td>
      <th className="text-center">
       
        <button className="bg-red-600 p-3 rounded text-white">Pending</button>
            <button onClick={userDelete} className="bg-black ml-1 p-3 rounded text-white">Delete</button>
      </th>
    </tr>
  );
};

export default SingleUser;
