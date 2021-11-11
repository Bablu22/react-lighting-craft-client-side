import React from 'react';

const Myorder = ({ order, handle }) => {

    const { itemName, itemImg, status, date, address, phone, _id } = order



    return (
        <div className=" bg-gray-100 grid items-center justify-center">
            <div className="p-6 bg-white sm:flex items-center  rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">

                <img src={itemImg} className="h-20 w-40 text-indigo-600" alt="" />

                <div className="">
                    <h1 className="text-xl font-bold text-gray-700 mb-2">{itemName}</h1>
                    <p className="text-gray-600 sm:w-80  text-sm">Shipping date: {date}</p>
                    <p className="text-gray-600 sm:w-80 text-sm">Shipping Addres: {address}</p>
                    <p className="text-gray-600 sm:w-80  text-sm">Contact: {phone}</p>
                    <div>
                        {status === 'Pending' ? <span className="text-xs font-semibold inline-block py-1 px-4 mt-3 uppercase rounded-full text-pink-600 bg-red-200 mr-3">{status}</span> :
                            <span className="text-xs font-semibold inline-block py-1 px-4 mt-3 uppercase rounded-full text-black-600 bg-green-200 mr-3">{status}</span>}
                    </div>
                    <button
                        onClick={() => handle(_id)}
                        className="py-1 px-6 text-white rounded-lg bg-red-500 mx-auto w-full mt-5 shadow-lg block md:inline-block">Cancle order</button>
                </div>

            </div>
        </div>
    );
};

export default Myorder;