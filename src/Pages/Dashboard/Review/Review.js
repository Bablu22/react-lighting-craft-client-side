import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SingleReview from './SingleReview';
import './Review.css'



const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://afternoon-earth-09168.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg-gray-50'>
            <div className='container mx-auto'>
                <h2 className='text-center text-yellow-500 italic text-4xl font-bold py-5 font-sans'>Customers Reviews</h2>
                <div className='lg:p-5 px-10'>
                    <Slider {...settings}>
                        {
                            reviews.map(review => <SingleReview
                                key={review.name}
                                review={review}
                            ></SingleReview>)
                        }

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Review;