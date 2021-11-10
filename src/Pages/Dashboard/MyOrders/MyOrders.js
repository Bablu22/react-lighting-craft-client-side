import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import Myorder from './Myorder';

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [isLooding, setIsLooding] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsLooding(false)
            })
    }, [orders])

    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    title: 'Do you want to delete the order?',
                    confirmButtonText: 'Delete',
                }).then((result) => {



                    if (result.isConfirmed) {
                        Swal.fire('Delete Sucessfull!', '', 'success')
                        if (data.deletedCount) {
                            const remaining = orders.filter(order => order._id != id)
                            setOrders(remaining)
                        }
                        else { return }
                    }
                })


            })

    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-2xl font-bold border-b pb-3'>Your All Oders Informations</h2>
            <div>
                {isLooding && <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
                {
                    orders.map(order => <Myorder
                        key={order._id}
                        handle={handleDelete}
                        order={order}
                    ></Myorder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;