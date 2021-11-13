import React, { useEffect, useState } from 'react';
import Chart from './Chart';

const AdminDashboard = () => {

    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://afternoon-earth-09168.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const pending = orders.filter(order => order.status === 'Pending')
    const approved = orders.filter(order => order.status === 'approved')
    useEffect(() => {
        fetch('https://afternoon-earth-09168.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const mapAdmin = users.filter(user => user.role)
    useEffect(() => {
        fetch('https://afternoon-earth-09168.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    return (
        <div className='container mx-auto p-5'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="w-full">
                    <div className="bg-white border rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-indigo-600"><i className="fas fa-cart-arrow-down mr-2 fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-500">Total Orders</h5>
                                <h3 className="font-bold text-3xl">{orders.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="bg-white border rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-purple-600"><i className="fas fa-user  mr-2 fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-500">Total Users</h5>
                                <h3 className="font-bold text-3xl">{users.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="bg-white border rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-gray-600"><i className="fas fa-user-tie  mr-2 fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-500">Total Admin</h5>
                                <h3 className="font-bold text-3xl">{mapAdmin.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="bg-white border rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-yellow-600"><i className="fas fa-paper-plane mr-2 fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-500">Total Products</h5>
                                <h3 className="font-bold text-3xl">{products.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="bg-white border rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-red-400"><i className="fas fa-frown mr-2 fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-500">Total Pending</h5>
                                <h3 className="font-bold text-3xl">{pending.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="bg-white border rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-green-600"><i className="fas fa-smile mr-2 fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-500">Total Approved</h5>
                                <h3 className="font-bold text-3xl">{approved.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-16 hidden lg:block">
                <Chart></Chart>

            </div>
        </div>
    );
};

export default AdminDashboard;