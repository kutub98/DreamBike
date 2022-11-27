import React from 'react';

const SingleUser = ({SingleUser}) => {
    const {userName, userImg, userRole, userEmail, signMethod} = SingleUser
    let count = 0
    return (
        <tr>
              <th className='text-center'>
            {count+1}
              </th>
              <td className='text-center'>
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={userImg} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{userName}</td>
              <td className='text-center'>{userEmail}</td>
              <td className='text-center'>{signMethod}</td>
              <td className='text-center'>{userRole}</td>
              <th className='text-center'>
                <button className="btn btn-ghost btn-xs">Approved</button>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </th>
            </tr>
    );
};

export default SingleUser;