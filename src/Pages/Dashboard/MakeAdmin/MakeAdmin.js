import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const { token } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value)
        e.target.value = ''
    }

    const handleSubmit = e => {
        e.preventDefault()
        const user = { email }
        fetch('https://afternoon-earth-09168.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Admin Added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    }


    return (
        <div className='container mx-auto'>
            <div className="bg-gray-100 py-6 flex flex-col justify-center ">

                <div className=" py-3 w-11/12 max-w-xl mx-auto">
                    <div className=" p-8 bg-white shadow-sm sm:rounded-xl">
                        <h2 className='text-2xl py-4 font-bold'>Make An Admin</h2>
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="mb-5 relative">
                                <input
                                    onBlur={handleOnBlur}
                                    type="email" id="email" className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="name@example.com" autocomplete="off" />
                                <label for="email" className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out font-bold">Email address</label>
                            </div>

                            <button
                                type='submit'
                                className="w-full bg-indigo-600 text-white p-3 rounded-md">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;