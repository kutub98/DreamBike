import React, { useEffect, useState } from 'react';

const Brand = () => {

    const [categories, setCategories]= useState([])

    
    useEffect(()=>{
        fetch('categories.json')
        .then(data => data.json())
        .then(res => setCategories(res))
    },[])
        console.log(categories)
    return (
        <div>
            {/* {categories.map(category => <h1></h1>)} */}
            
        </div>
    );
};

export default Brand;