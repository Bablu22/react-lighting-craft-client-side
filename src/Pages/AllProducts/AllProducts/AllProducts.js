import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Product from '../../Home/Product/Product';


const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [isLooding, setIsLooding] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLooding(false)
            })
    }, [])

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className="container mx-auto">
            <div>
                {isLooding && <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>}
            </div>
            <div data-aos="fade-up" className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;