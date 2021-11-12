import React, { useRef, Fragment } from 'react';
import Swal from 'sweetalert2';
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form';


const ProductUpdateModal = ({ product, modal, openModal, closeModal }) => {
    const cancelButtonRef = useRef(null)


    const { register, handleSubmit, reset } = useForm({ mode: "onChange" });
    const onSubmit = data => {

        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Update success',
                        showConfirmButton: false,
                        timer: 1700
                    })
                    reset()
                }


            })

        closeModal(false)
    };
    return (
        <div>
            <Transition.Root show={modal} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    onClose={openModal}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <div className='flex justify-between'>
                                                <div>
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-xl leading-6 font-medium text-gray-900"
                                                    >
                                                        {product.name}
                                                    </Dialog.Title>
                                                </div>
                                                <div
                                                    className='cursor-pointer'
                                                    onClick={() => closeModal(false)}>
                                                    <i class="fas fa-times text-red-500 text-2xl "></i>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form bg-white w-full p-6 lg:px-16 xl:px-12  border  justify-center">
                                                    <h2 className="about-span text-center text-xl">
                                                        Update product name and price
                                                    </h2>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        {/* register your input into the hook by invoking the "register" function */}
                                                        <label className="block text-gray-700">Name</label>
                                                        <input
                                                            placeholder="Product Name"
                                                            {...register("name")}
                                                            defaultValue={product.name}
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                        />

                                                        <label className="block text-gray-700 mt-3">
                                                            Price
                                                        </label>
                                                        <input
                                                            defaultValue={product.price}
                                                            placeholder="Product Price"
                                                            {...register("price")}
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                        />
                                                        <label className="block text-gray-700 mt-3">
                                                            Description
                                                        </label>
                                                        <textarea
                                                            defaultValue={product.description}
                                                            placeholder="Product Price"
                                                            {...register("description")}
                                                            required
                                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                        />
                                                        <input

                                                            className="button w-full cursor-pointer"
                                                            type="submit"
                                                            value="Update"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default ProductUpdateModal;