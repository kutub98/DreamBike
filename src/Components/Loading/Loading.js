import React from "react";


const products = { products: { world: {}} }
const Loading = () => {
  return (
    <div>
      <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-pink-600 text-gray-50">
        Wait few seconds!
      </button>
    </div>
  );
};

export default Loading;
