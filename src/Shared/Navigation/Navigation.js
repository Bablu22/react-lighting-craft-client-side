import React, { useEffect, useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png'
import './Navigation.css'
import useAuth from '../../hooks/useAuth';
import User from '../../images/user.jpg'

const Navigation = () => {
    const { user, logOut } = useAuth()

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [orders])

    return (
        <div className="header">
            <Disclosure as="nav" className="lg:bg-transparent bg-gray-900 lg:py-10">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <Link to="/home">
                                        <div className="flex-shrink-0 flex items-center">
                                            <img className='w-full' src={Logo} alt="" />
                                        </div>
                                    </Link>
                                    <div className="hidden sm:block sm:ml-auto">
                                        <div className="flex space-x-4 text-white mt-5 font-medium">
                                            <NavLink to="/home">Home</NavLink>
                                            <NavLink to="/products">Products</NavLink>
                                            {user?.email && <NavLink to="/dashboard">Dashboard</NavLink>}
                                            <NavLink to="/contact">Contact</NavLink>
                                            <NavLink to='/dashboard'>
                                                <div class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white relative">

                                                    <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                                                        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                                    </svg>
                                                    <div class="absolute right-0 top-0 rounded-full bg-yellow-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{orders.length}
                                                    </div>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>

                                                {user?.photoURL !== null ? <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={user?.photoURL ? user?.photoURL : User}
                                                    alt=""
                                                /> : <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={`https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${user.displayName}/128`}
                                                    alt=""
                                                />


                                                }
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (

                                                        <div

                                                            className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            {user.displayName}
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                                {
                                                    !user?.email ? <Menu.Item>
                                                        {({ active }) => (

                                                            <NavLink to="/login"><div

                                                                className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign In
                                                            </div> </NavLink>


                                                        )}
                                                    </Menu.Item> :
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a onClick={logOut}
                                                                    href="#/"
                                                                    className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Sign out
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                }
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <NavLink to="/home">Home</NavLink>
                                </div>
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <NavLink to="/products">products</NavLink>
                                </div>
                                {user?.email && <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                </div>}

                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <NavLink to="/contact">Contact</NavLink>
                                </div>
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <NavLink to="/login">Login</NavLink>
                                </div>

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default Navigation;