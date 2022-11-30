import React, { useState } from "react";
import toast from "react-hot-toast";

const MySingleProduct = ({ mySinglePrd , refetch }) => {
    const [soldOut, setSoldOut] = useState(false)
    const {resellPrice, image, _id, } = mySinglePrd;



    const myProduct = () => {
      const agree = window.confirm(`are you sure want to delete ${_id}`);
  
      if (agree) {
        fetch(`http://localhost:5000/myProduct/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: ` bearer ${localStorage.getItem("bikerToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success(`Successfully delete ${_id}`);
              refetch()
            } else {
              toast.error("Sorry You are not authorized");
            }
          });
      }
    };


  return (
    <tr>
      <th></th>
      <th className="text-left ml-[-4px]">{mySinglePrd._id}</th>
      <th className="text-center">
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={mySinglePrd.image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </th>
      <th className="text-center">{mySinglePrd.resellPrice}</th>
      <th className="text-center">
        {
            soldOut ?   <button>Sold</button> :  <button>Advertise</button>
           
        }
        
      </th>
      <th className="text-center">
        {
            soldOut ?   <button>Delivered</button> :   <>
            <button onClick={myProduct}  className="bg-red-600 p-3 rounded text-white">Delete</button>
            <button className="bg-black ml-1 p-3 rounded text-white">Edit</button>
            </> 
           
        }
        
      </th>

    </tr>
  );
};

export default MySingleProduct;
