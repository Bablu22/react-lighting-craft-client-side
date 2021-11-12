import React from 'react';

const Map = () => {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.822391377!2d90.27923731743147!3d23.7808874568017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1636728180907!5m2!1sen!2sbd'
    return (
        <div className='p-5 container mx-auto'>
            <iframe src={url}

                frameBorder="0"
                style={{ border: 0, width: '100%', height: '300px' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0" />
        </div>
    );
};

export default Map;