import React from 'react';

const OrdersTable = ({ order, handle, update }) => {

    const { name, email, user, itemName, itemImg, status, date, _id, phone } = order

    return (

        <tbody className="text-gray-600 text-sm font-light">

            <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src={itemImg} alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="font-medium text-black">{itemName}</p>
                            <p className="text-xs font-medium text-gray-600">ID: {_id}</p>
                            <p className="text-xs font-medium text-gray-600">Order date: {date}</p>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            {user !== null ? < img className="object-cover w-full h-full rounded-full" src={user} alt="" loading="lazy" /> :
                                <img className="object-cover w-full h-full rounded-full" src={`https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${name}/128`} alt="" loading="lazy" />}
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="font-medium text-black">{name}</p>
                            <p className="text-xs font-medium text-gray-600">Email: {email}</p>
                            <p className="text-xs font-medium text-gray-600">Phone: {phone}</p>
                        </div>
                    </div>
                </td>

                <td className="py-3 px-6 text-center">
                    {status === 'Pending' ? <span className="bg-red-200 text-black py-1 px-3 rounded-full text-xs">{status}</span> :
                        <span className="bg-green-200 text-black py-1 px-3 rounded-full text-xs">{status}</span>}
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                        <button
                            onClick={() => update(_id)}
                            className="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokelineCap="round" strokelineJoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokelineCap="round" strokelineJoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>

                        <button
                            onClick={() => handle(_id)}
                            className="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokelineCap="round" strokelineJoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default OrdersTable;


