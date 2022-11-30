import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaLeaf } from "react-icons/fa";

const SingleUser = ({ SingleUser, refetch }) => {
  const { displayName, idx, _id, photoURL, role, email, signMethod } = SingleUser;
  const [remainingUser, setRemainingUser] = useState(false)

  const userDelete = () => {
    const agree = window.confirm(`are you sure want to delete ${displayName}`);

    if (agree) {
      fetch(`http://localhost:5000/allUser/${email}`, {
        method: "DELETE",
        headers: {
          authorization: ` bearer ${localStorage.getItem("bikerToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Successfully delete ${displayName}`);
            refetch()
          } else {
            toast.error("Sorry You are not authorized");
          }
        });
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
        {
          role === 'admin' ? <button disabled onClick={userDelete} className="bg-gray-200 ml-1 p-3 rounded text-white">
          Delete
        </button> : <button onClick={userDelete} className="bg-black ml-1 p-3 rounded text-white">
          Delete
        </button>
        }
      </th>
    </tr>
  );
};

export default SingleUser;
