import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser/SingleUser";

const AllUsers = () => {
    const [users, setUsers] = useState([])

    const userUrl = 'http://localhost:5000/allUser'
    useEffect(()=>{
        fetch(userUrl)
        .then(data => data.json())
        .then(res => setUsers(res))
    },[])

    console.log(users)
  return (
    <div>
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
            {
                users.map(user => <SingleUser key={user._id} SingleUser={user}></SingleUser>)
            }

        </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
