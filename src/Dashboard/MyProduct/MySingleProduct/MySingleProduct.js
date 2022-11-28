import React, { useState } from "react";

const MySingleProduct = ({ mySinglePrd }) => {
    const [soldOut, setSoldOut] = useState(false)
    const {resellPrice, image, _id, } = mySinglePrd;
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
            soldOut ? <button>Sold</button> : <button>Advertise now</button>
        }
        
      </th>
      <th className="text-center">
        {
             soldOut ? <button>Delete</button> : <button>Edit</button>
        }
      </th>
    </tr>
  );
};

export default MySingleProduct;
