import React from 'react';

const SingleOrdeCmp = ({singOrder , refetch}) => {
    console.log(singOrder)
    const {bikeName, customerEmail,customerName,productImag, idx, customerNumber, priceFixed , receivedLocation , _id} = singOrder 
    let serialNumber = 0
    return (
       
            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                <td className="text-center">
                  <p> {idx}</p>
                </td>
                <td className="text-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={productImag}alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <p>{customerEmail}</p>
                </td>
                <td className="text-center">
                  <p>{_id}</p>
                </td>
                <td className="text-center">
                  <p>{bikeName}</p>
                 
                </td>
                <td className="text-center">
                  <p>11/26/22</p>
                </td>
                <td className=" text-center">
                  <p>{priceFixed}</p>
                </td>
                
                <td className="text-center">
                    <button className="btn">Pay</button>
                </td>
              </tr>
       
    );
};

export default SingleOrdeCmp;