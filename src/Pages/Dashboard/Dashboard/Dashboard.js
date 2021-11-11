import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../../../Authentication/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageAllOrders/ManageOrders';
import ManageProducts from '../ManageProduct/ManageProducts';
import Myorder from '../MyOrders/Myorder';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth()

    return (
        <div className='order-container'>
            <div className="bg-gray-100 font-sans leading-normal tracking-normal">
                <div className="flex md:flex-row-reverse flex-wrap">

                    <div className="w-full md:w-4/5 bg-gray-100">
                        <div className="container bg-gray-100 pt-16 pb-32  mx-auto">
                            <Switch>
                                {!admin && <>
                                    <Route exact path={path}>
                                        <MyOrders></MyOrders>
                                    </Route>
                                    <Route path={`${path}/pay`}>
                                        <Pay></Pay>
                                    </Route>
                                    <Route path={`${path}/orders`}>
                                        <Myorder></Myorder>
                                    </Route>
                                    <Route path={`${path}/addReview`}>
                                        <AddReview></AddReview>
                                    </Route>
                                </>}

                                {admin && <>
                                    <AdminRoute exact path={path}>
                                        <ManageOrders></ManageOrders>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addProduct`}>
                                        <AddProduct></AddProduct>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageProduct`}>
                                        <ManageProducts></ManageProducts>
                                    </AdminRoute>
                                </>}

                            </Switch>
                        </div>
                    </div>

                    <div className="w-full  md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center   md:pt-8  md:left-0 absolute md:relative lg:relative ">
                        <div className=" mx-auto lg:float-right lg:px-14">
                            <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                                {
                                    !admin && <>
                                        <li className="mr-3 flex-1">

                                            <Link
                                                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 "
                                                to={`${url}`}>My orders</Link>
                                        </li>
                                        <li className="mr-3 flex-1">

                                            <Link
                                                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 "
                                                to={`${url}/pay`}>Pay</Link>
                                        </li>
                                        <li className="mr-3 flex-1">

                                            <Link
                                                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 "
                                                to={`${url}/addReview`}>Review</Link>
                                        </li>
                                    </>
                                }
                                {admin && <>
                                    <li className="mr-3 flex-1">

                                        <Link
                                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 "
                                            to={`${url}`}>Manage Orders</Link>
                                    </li>

                                    <li className="mr-3 flex-1">

                                        <Link
                                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 "
                                            to={`${url}/makeAdmin`}>Make Admin</Link>
                                    </li>
                                    <li className="mr-3 flex-1">

                                        <Link
                                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 "
                                            to={`${url}/addProduct`}>Add Product</Link>
                                    </li>
                                    <li className="mr-3 flex-1">

                                        <Link
                                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 "
                                            to={`${url}/manageProduct`}>Manage Products</Link>
                                    </li>

                                </>}


                                <li className="mr-3 flex-1">

                                    <button
                                        onClick={logOut}
                                        className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 "
                                    >Log out</button>

                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;