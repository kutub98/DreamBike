import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthContext/AuthContext";
import MySingleProduct from "./MySingleProduct/MySingleProduct";

const MyProduct = () => {
  const { user } = useContext(authContext);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dream-bike-server-rose.vercel.app/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl my-3 text-black">My product </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-left ml-[-4px]">Product Id</th>
              <th className="text-center">Product Img</th>
              <th className="text-center">Product Price</th>
              <th className="text-center">Product Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((mPrd) => (
              <MySingleProduct key={mPrd._Id} mySinglePrd={mPrd}></MySingleProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
