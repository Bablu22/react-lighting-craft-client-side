import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Map from './Map';

const Contact = () => {
    return (
        <div className='container mx-auto w-full'>
            <ContactInfo></ContactInfo>

            <div className=''>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <ContactForm></ContactForm>
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Contact;