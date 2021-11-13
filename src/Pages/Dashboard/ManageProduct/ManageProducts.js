import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        fetch('https://afternoon-earth-09168.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
            })
    }, [])



    const handleSearch = e => {
        const searchText = e.target.value

        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProduct(matchProducts)

    }

    const handleDelete = id => {
        fetch(`https://afternoon-earth-09168.herokuapp.com/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You wan't to delete this!",
                        icon: 'warning',
                        confirmButtonColor: '#eb4d4b',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(i => i._id !== id)
                            setDisplayProduct(remaining)
                        }
                    })

                }
            })
    }

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="antialiased font-sans ">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">All products Informations</h2>
                    </div>
                    <div className="my-2 flex sm:flex-row flex-col items-center">

                        <div className="block relative w-1/2">
                            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input
                                onChange={handleSearch}
                                placeholder="Search here"
                                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>
                        <button onClick={reloadPage}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Product
                                        </th>

                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    displayProduct.map(product => <ManageProduct
                                        key={product._id}
                                        product={product}
                                        handle={handleDelete}
                                    // openModal={openModal}
                                    ></ManageProduct>)
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageProducts;