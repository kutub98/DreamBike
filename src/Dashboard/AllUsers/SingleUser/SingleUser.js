import React from 'react';
import toast from 'react-hot-toast';

const SingleUser = ({SingleUser}) => {
    const {userName, userImg, userRole, userEmail, signMethod} = SingleUser
    let count = 0
console.log(SingleUser)
    const userDelete = () => {

      const agree = window.confirm(`are you sure want to delete ${userName}`)
      
      if(agree){
        fetch(`http://localhost:5000/allUser/${SingleUser._id}`, {
        method: "DELETE"
      })
      .then(data => data.json())
      .then(res => {
        console.log(res)
        if(res.deletedCont > 0){
          toast.success(`${userName} has been deleted successfully`)
        }
      })
      }

    }
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
                <button className="btn bg-warning btn-ghost btn-xs">Pending</button>
                <button onClick={userDelete} className="btn bg-red-600 text-white btn-ghost btn-xs">Delete</button>
              </th>
            </tr>
    );
};

export default SingleUser;