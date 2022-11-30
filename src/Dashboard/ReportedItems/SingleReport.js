import React from "react";

const SingleReport = ({ report, idx }) => {
  const { sellerEmail, sellerName, productId, image } = report;

  return (
    <tr>
      <th className="text-center">{idx}</th>
      <td className="text-center">
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{sellerName}</td>
      <td className="text-center">{sellerEmail}</td>
      <td className="text-center">{productId}</td>
    </tr>
  );
};

export default SingleReport;
