import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleDown,FaArrowCircleRight } from "react-icons/fa";
const SingleCategory = ({category}) => {
    const {CategoryName, serviceId, image, _id} = category;
    
    return (
        
      <div className="">
        
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-2 pt-2">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.CategoryName}</h2>
              <p>YDBIKE Imported huge used and brand NEW Bike for you see all bikes under this category here <FaArrowCircleDown/></p>
              <div className="card-actions">
                <Link className='bg-red-600 w-full py-3 flex items-center text-white px-3 rounded font-bold ' to={`/allCategories/${CategoryName}`}>See All products <FaArrowCircleRight className='ml-1'/> </Link>
              </div>
            </div>
          </div>
       
    </div>
    );
};

export default SingleCategory;