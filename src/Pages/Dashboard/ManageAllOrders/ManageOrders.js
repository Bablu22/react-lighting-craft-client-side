import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import OrdersTable from './OrdersTable';

const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://afternoon-earth-09168.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const approvedStatus = id => {
        fetch(`https://afternoon-earth-09168.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then((result) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Approved',
                    showConfirmButton: false,
                    timer: 2000
                })
            });
    }

    const handleDelete = id => {
        fetch(`https://afternoon-earth-09168.herokuapp.com/orders/${id}`, {
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
                            const remaining = orders.filter(i => i._id !== id)
                            setOrders(remaining)
                        }
                    })

                }
            })
    }

    return (
        <div>
            <section className="container mx-auto p-2">
                <h2 className='text-center font-bold text-2xl py-4 border-b'>All orders list and Information</h2>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Product Name</th>
                                    <th className="py-3 px-6 text-left">Customer Information</th>
                                    <th className="py-3 px-6 text-center">Status</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            {
                                orders.map(order => <OrdersTable
                                    key={order._id}
                                    order={order}
                                    handle={handleDelete}
                                    update={approvedStatus}
                                ></OrdersTable>)
                            }
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageOrders;
