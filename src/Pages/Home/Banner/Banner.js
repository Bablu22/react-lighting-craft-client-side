import React, { useEffect } from 'react';
import './Banner.css'
import image1 from '../../../images/banner1.jpg'
import image2 from '../../../images/parallax.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,



    };
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div className="slider">
            <div className="slider-container text-center">

                <Slider className=" " {...settings}>

                    <div className="focus:outline-none">
                        <div className="banner">
                            <img className="" src={image1} alt="" />
                            <div className="banner-content w-full">
                                <div data-aos="fade-up">
                                    <h1 className="sm:text-6xl leading-snug text-3xl text-yellow-500 font-light mb-2">HOME INTERIORS & DECORATIVE <br /> LIGHTS
                                    </h1>
                                    <p className='text-white text-2xl font-light py-3'>Get Upto 50% Off Each At Store Only</p>
                                    <button className="button">Shop Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="focus:outline-none">
                        <div className="banner">
                            <img className="" src={image2} alt="" />
                            <div className="banner-content w-full">
                                <div data-aos="fade-up">
                                    <h1 className="sm:text-6xl mb-2 text-3xl font-light">INTERIORS & CEILING DECORATIVE <br /> LIGHTS</h1>
                                    <p className='text-white text-2xl font-light py-3'>Discover Best Of Stylist Cataloug, 2021</p>
                                    <button className="button">Shop Now</button>
                                </div>
                            </div>
                        </div>

                    </div>


                </Slider>
            </div>
        </div>
    );
};

export default Banner;