import React from 'react';

const SingleSeller = ({SSeller}) => {
    const { displayName, idx, _id,  photoURL, role, email, signMethod } = SSeller;

    const verifySeller = () =>{
        console.log('hello')
    }
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
          <button className="btn bg-warning btn-ghost btn-xs">Pending</button>
          <button onClick={verifySeller} className="btn bg-red-600 text-white btn-ghost btn-xs">
            Delete
          </button>

          
        </th>
      </tr>
    );
};

export default SingleSeller;