import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import Myorder from './Myorder';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
    }, [])



    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
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
                            const remaining = orders.filter(i => i._id != id)
                            setOrders(remaining)
                        }
                    })

                }
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