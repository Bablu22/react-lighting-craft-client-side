import React from 'react';

const ContactForm = () => {
    return (
        <div className="container mx-auto font-sans">
            <div className="p-5">
                <form >
                    <div className="mb-3">
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full border border-gray-400 py-2 pl-3 rounded  outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <div className='mb-3'>
                        <input type="text" name="email" id="email" placeholder="Email" className="w-full border border-gray-400 py-2 pl-3 rounded outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <div className='mb-3'>
                        <input type="text" name="phone" id="phone" placeholder="Phone" className="w-full border border-gray-400 py-2 pl-3 rounded outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <div className='mb-1'>
                        <textarea type="text" name="message" id="message" placeholder="Message" className="w-full bg-white rounded border  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out border-gray-400" />
                    </div>
                    <button className="cursor-pointer py-1 px-16 block mt-6 bg-transparent border border-black text-black hover:bg-black hover:text-white transition duration-500  font-bold  text-center rounded">Send</button>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;