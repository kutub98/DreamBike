import React from "react";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div className="px-[10%] py-10">
      <div className="p-6 py-12 bg-violet-100 text-gray-50">
        <div className="container mx-auto">
            <p></p>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter text-black font-bold">
              Up to
              <br className="sm:hidden"></br>  8% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span className="text-red-600">For new customer OF</span>
              <span className="font-bold text-black text-lg">YDBIKE</span>
            </div>
            <Link to="/Categories" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
