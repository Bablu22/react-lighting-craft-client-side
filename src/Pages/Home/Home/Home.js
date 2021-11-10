import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Review from '../../Dashboard/Review/Review';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <div className='home-container'>
                <Products></Products>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;