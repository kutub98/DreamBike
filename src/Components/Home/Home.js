import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import Contact from './Cotact/Contact';
import Discount from './Discount/Discount';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categories></Categories>
           <Discount></Discount>
           <Features></Features>
           <Testimonial></Testimonial>
           <Contact></Contact>
        </div>
    );
};

export default Home;