import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Review from '../../Dashboard/Review/Review';
import Banner from '../Banner/Banner';
import Offer from '../OfferSection/Offer';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <div className='home-container'>
                <Products></Products>
                <Offer />
                <Review></Review>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;