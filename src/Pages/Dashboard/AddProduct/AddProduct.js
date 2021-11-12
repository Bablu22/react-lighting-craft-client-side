import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const { register, handleSubmit, reset, } = useForm({ mode: "onChange" });
    const onSubmit = data => {

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product added successfull',
                        showConfirmButton: false,
                        timer: 1700
                    })
                    reset()
                }


            })

    };

    return (
        <div className="">
            <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col mx-auto w-full mt-10 lg:mt-0 rounded-md">

                <h2 className='text-center font-medium text-2xl border-b pb-5'>Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label className="block text-gray-700">Product Name</label>
                    <input
                        placeholder="Product Name"
                        {...register("name")}
                        required
                        className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                    />

                    <label className="block text-gray-700 mt-3">
                        Product Price
                    </label>
                    <input
                        required
                        placeholder="Product Price"
                        {...register("price")}
                        className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                    />
                    <label className="block text-gray-700 mt-3">
                        Product image
                    </label>
                    <input
                        required
                        placeholder="Product image"
                        {...register("img")}
                        className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                    />
                    <label className="block text-gray-700 mt-3">
                        Description
                    </label>
                    <textarea

                        placeholder="Product Description"
                        {...register("description")}
                        required
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                    <input

                        className="button w-full cursor-pointer"
                        type="submit"
                        value="Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;

