import React from 'react';
import Logo from '../../images/logo.png'
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gray-800 text-white absolute w-full  pt-1">
                <div className="container mx-auto px-6">

                    <div className="sm:flex sm:mt-8">
                        <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                            <div className="flex flex-col mb-7">
                                <div>
                                    <img src={Logo} alt="" />
                                </div>
                                <h5 className="mt-4 text-gray-400">At vero eos et accusamus et iusto odio dignissimos ducimus, <br /> duis faucibus enim vitae</h5>
                                <div className=" flex mt-10 card-actions">
                                    <div className="icon"><i className="fab text-white fa-facebook-f"></i></div>
                                    <div className="icon"><i className="fab text-white fa-twitter"></i></div>
                                    <div className="icon"><i className="fab text-white fa-google"></i></div>
                                    <div className="icon"><i className="fab text-white fa-instagram"></i></div>
                                </div>

                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-500 uppercase mb-2">OUR COMPANY</span>
                                <span className="my-2">Search</span>
                                <span className="my-2">About</span>
                                <span className="my-2">UsContact</span>
                                <span className="my-2">UsDelivery</span>
                                <span className="my-2">Faq's</span>

                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-500 uppercase mt-4 md:mt-0 mb-2">PRODUCTS</span>
                                <span className="my-2">All Collection</span>
                                <span className="my-2">Delivery</span>
                                <span className="my-2">Terms & Conditions</span>
                                <span className="my-2"> Legal NoticeWishlist</span>

                            </div>

                            <div className="flex flex-col">
                                <span className="font-bold text-gray-500 uppercase mt-4 md:mt-0 mb-2">STORE INFORMATION</span>
                                <div className='flex items-center'>
                                    <div>
                                        <FaLocationArrow />
                                    </div>
                                    <div className="ml-5 py-4">
                                        <span >42 Puffin Street <br /> 12345 Puffinville France
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="ml-5 py-4">
                                        <span >0123-456-789
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <FaEnvelope />
                                    </div>
                                    <div className="ml-5 py-4">
                                        <span >sales@gmail.com
                                        </span>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="mt-16 border-t-2 border-gray-600 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-lg text-gray-400 font-bold mb-2">
                                Copyright © 2021 by Bablu Mia
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;