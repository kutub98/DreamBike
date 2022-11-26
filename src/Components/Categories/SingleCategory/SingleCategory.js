import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({category}) => {
    const {CategoriesName, serviceId, image, _id} = category;
    return (
        
      <div className="">
        
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-2 pt-2">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.CategoriesName}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <Link className='bg-red-600 w-full py-3 text-white px-3 rounded font-bold ' to={`/allCategories/${serviceId}`}>Explore Products</Link>
              </div>
            </div>
          </div>
       
    </div>
    );
};

export default SingleCategory;