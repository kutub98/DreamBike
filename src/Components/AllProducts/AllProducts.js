import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const AllProducts = () => {

    const [allProducts, setAllProducts]= useState([])

    
    useEffect(()=>{
        fetch('http://localhost:5000/allBikes')
        .then(data => data.json())
        .then(res => setAllProducts(res))
    },[])
       
    return (
        <div className='py-8 px[10%] '>
           {
            allProducts.map(singleProduct => <SingleCategory key={singleProduct._id} singleProduct={singleProduct}></SingleCategory>)
           }
            
        </div>
    );
};

export default AllProducts;