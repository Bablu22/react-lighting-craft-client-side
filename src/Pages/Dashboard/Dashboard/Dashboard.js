import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import Myorder from '../MyOrders/Myorder';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth()

    return (
        <div className='order-container'>
            <div className="bg-gray-100 font-sans leading-normal tracking-normal">
                <div className="flex md:flex-row-reverse flex-wrap">

                    <div className="w-full md:w-4/5 bg-gray-100">
                        <div className="container bg-gray-100 pt-16 pb-32  mx-auto">
                            <Switch>
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
                            </Switch>
                        </div>
                    </div>

                    <div className="w-full  md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center   md:pt-8  md:left-0 absolute md:relative lg:relative ">
                        <div className=" mx-auto lg:float-right lg:px-16">
                            <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
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