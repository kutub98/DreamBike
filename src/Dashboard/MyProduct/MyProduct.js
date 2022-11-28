import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthContext/AuthContext";
import MySingleProduct from "./MySingleProduct/MySingleProduct";

const MyProduct = () => {
  const { user } = useContext(authContext);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-black font-extrabold text-lg text-center my-3">My Products</h1>
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
            {
                myProducts.map(mPrd => <MySingleProduct key={mPrd._Id} mySinglePrd = {mPrd}></MySingleProduct>)
            }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
