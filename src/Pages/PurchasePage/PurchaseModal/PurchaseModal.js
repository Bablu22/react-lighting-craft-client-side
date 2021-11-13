import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';




const PurchaseModal = ({ product, modal, openModal, closeModal }) => {

    const cancelButtonRef = useRef(null)
    const { user } = useAuth()
    const name = (product?.name)
    const img = (product?.img)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });
    const onSubmit = data => {
        // console.log(data)
        data.user = user.photoURL
        data.itemName = name
        data.itemImg = img
        data.status = 'Pending'
        fetch('https://afternoon-earth-09168.herokuapp.com/orders', {
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
                        title: 'Order success',
                        showConfirmButton: false,
                        timer: 1500
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
                                                <div className="form bg-white w-full p-6 lg:px-16 xl:px-12  border border-yellow-500 justify-center">
                                                    <h2 className="about-span text-lg">
                                                        Please give additional information to receive your
                                                        orders
                                                    </h2>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        {/* register your input into the hook by invoking the "register" function */}
                                                        <label className="block text-gray-700">Name</label>
                                                        <input
                                                            placeholder="Name"
                                                            defaultValue={user.displayName}
                                                            {...register("name")}
                                                            required
                                                            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                                                        />

                                                        {/* include validation with required or other standard HTML validation rules */}
                                                        <label className="block text-gray-700 mt-3">
                                                            Email
                                                        </label>
                                                        <input
                                                            defaultValue={user.email}
                                                            {...register("email", { required: true })}
                                                            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                                                        />
                                                        {/* errors will return when field validation fails  */}
                                                        <label className="block text-gray-700 mt-3">
                                                            Service
                                                        </label>
                                                        <input
                                                            defaultValue={name}
                                                            {...register("order")}
                                                            required
                                                            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                                                        />
                                                        <label className="block text-gray-700 mt-3">Date</label>
                                                        <input
                                                            type="date"
                                                            {...register("date")}
                                                            required
                                                            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                                                        />
                                                        {errors.exampleRequired && (
                                                            <span>This field is required</span>
                                                        )}
                                                        <label className="block text-gray-700 mt-3">
                                                            Address
                                                        </label>
                                                        <input
                                                            placeholder="Address"
                                                            {...register("address")}
                                                            required
                                                            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                                                        />
                                                        <label className="block text-gray-700 mt-3">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            placeholder="Number"
                                                            {...register("phone")}
                                                            required
                                                            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                                                        />
                                                        <input

                                                            className="button w-full cursor-pointer"
                                                            type="submit"
                                                            value="Book Now"
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

export default PurchaseModal;