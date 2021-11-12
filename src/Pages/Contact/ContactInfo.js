import React from 'react';

const ContactInfo = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  text-center py-20'>
            <div>
                <div className='w-20 h-20 mx-auto border rounded-full flex justify-center items-center hover:bg-yellow-400 transition duration-500 ease-in-out '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <h3 className='text-gray-600 font-sans mt-5'>Address: <br /> 4030, Central Bazzar, opp. <br /> Varachha Police Station, Surat</h3>
                </div>
            </div>
            <div>
                <div className='w-20 h-20 mx-auto border rounded-full flex justify-center items-center hover:bg-yellow-400 transition duration-500 ease-in-out '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                </div>
                <div>
                    <h3 className='text-gray-600 font-sans mt-5'>
                        Fax numbers: <br /> 123456789
                    </h3>
                </div>
            </div>
            <div>
                <div className='w-20 h-20 mx-auto border rounded-full flex justify-center items-center hover:bg-yellow-400 transition duration-500 ease-in-out '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                </div>
                <h3 className='text-gray-600 font-sans mt-5'>
                    Email: <br /> info@example.com
                </h3>
            </div>
        </div>
    );
};

export default ContactInfo;