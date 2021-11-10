import React from 'react';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const { name, img, price, description, _id } = product
    const history = useHistory()

    const handlePurchasePage = () => {
        history.push(`/purchase/${_id}`)
    }

    return (
        <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
            <img src={img}
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6 p-8 cursor-pointer  transform hover:scale-150 transition duration-500"
                alt="" />
            <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">{name}</h2>
            <h3 className="tracking-widest text-yellow-500 text-2xl font-medium title-font">${price}</h3>
            <p className="leading-relaxed text-gray-600 mt-3">{description?.slice(0, 100)}</p>
            <button
                onClick={handlePurchasePage}
                className="button w-full ">Check out</button>
        </div>
    );
};

export default Product;