import React from 'react';
import image from '../../../images/subscribe.jpeg'

const Subscribe = () => {
    return (
        <div>
            <div className="container flex flex-col justify-center items-center mx-auto py-10">
                <div style={{ backgroundImage: `url(${image})`, }}
                    className=" bg-gray-300 h-96 w-full rounded-lg shadow-md bg-cover bg-center">
                </div>
                <div className="bg-white -mt-24 md:w-1/2 shadow-md rounded-lg overflow-hidden">
                    <div className="items-center justify-between py-10 px-5 bg-gray-800 shadow-2xl rounded-lg mx-auto text-center">
                        <div className="px-2 -mt-6">
                            <div className="text-center">
                                <h1 className="font-normal text-3xl text-white font-medium leading-loose my-3 w-full">Get the
                                    Latest Information</h1>
                                <div className="w-full text-center">
                                    <form action="#">
                                        <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                                            <input type="email" placeholder="yourmail@example.com"
                                                className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none" />
                                            <button type="submit"
                                                className="bg-yellow-500 text-black text-base font-semibold rounded-md shadow-md hover:bg-white transition duration-500 p-3">Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;