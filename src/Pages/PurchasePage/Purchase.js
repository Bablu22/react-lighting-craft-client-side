import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PurchaseModal from './PurchaseModal/PurchaseModal';

const Purchase = () => {
    const [open, setOpen] = useState(false)


    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://afternoon-earth-09168.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    return (
        <div className='container mx-auto'>
            <section className="relative py-16 bg-blueGray-50">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 mx-auto mr-auto px-4 ">
                        <img alt="..." className="max-w-full rounded-lg shadow-lg" src={product.img} />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className='flex items-center border-b'>
                                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-8 h-8 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                                    <i className="fas fa-tag"></i>
                                </div>
                                <h3 className="text-2xl font-semibold ml-3">{product.name}</h3>
                            </div>

                            <p className="mt-4 text-lg w-full font-sans	 leading-relaxed text-gray-500">
                                {product.description}
                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500 font-sans">
                                                Carefully crafted components
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fas fa-shipping-fast"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500 font-sans">Firstest shipping</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500 font-sans">Cash on delevary  or online payment system</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button
                                onClick={openModal}
                                className='button w-full'>Purchase Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <PurchaseModal
                product={product}
                modal={open}
                openModal={openModal}
                closeModal={closeModal}
            ></PurchaseModal>
        </div>
    );
};

export default Purchase;