import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import image from '../../../images/seprator.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([])
    const limitProducts = products.slice(0, 8)
    const [isLooding, setIsLooding] = useState(true)

    useEffect(() => {
        fetch('https://afternoon-earth-09168.herokuapp.com/products')
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
        <div className='container mx-auto my-28'>
            <h2 className='text-center text-5xl mb-3 pt-20'>TRENDING PRODUCTS</h2>

            <img className=" mx-auto mb-14" src={image} alt='separator' />

            <div>
                {isLooding && <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>}
            </div>

            <div data-aos="fade-up" className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    limitProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <p className="text-right mr-5 text-xl underline">
                <Link
                    to='/products'
                    className='text-yellow-500'
                >explore more</Link>
            </p>
        </div>
    );
};

export default Products;