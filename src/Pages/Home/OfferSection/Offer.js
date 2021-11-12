import React from 'react';
import image1 from '../../../images/offer2.jpg'
import image2 from '../../../images/offer1.jpg'
import image3 from '../../../images/offer3.jpg'
import image4 from '../../../images/offer4.jpg'


const Offer = () => {
    return (
        <div className='container mx-auto my-28'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className='' style={{ background: `url(${image1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', backgroundPosition: 'center', }}>
                    <div className='flex items-center py-28 ml-10'>
                        <div>
                            <h3 className='text-3xl text-yellow-400 font-mono'>With Comforts</h3>
                            <h2 className='text-white text-5xl font-serif'>Decorate Light</h2>
                            <button className='button'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='' style={{ background: `url(${image4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
                    <div className="flex items-center py-28 ml-10">
                        <div>
                            <h3 className='text-3xl text-gray-500 font-mono'>Up to</h3>
                            <h2 className='text-gray-500 text-5xl font-serif'>40% OFF</h2>
                            <button className='button'>Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className='' style={{ background: `url(${image3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
                    <div className="flex items-center py-28 ml-10">
                        <div>
                            <h3 className='text-3xl text-gray-800 font-mono'>Up to</h3>
                            <h2 className='text-gray-500 text-5xl font-serif'>60% OFF </h2>
                            <button className='button'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='' style={{ background: `url(${image2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
                    <div className="flex items-center py-28 ml-10">
                        <div>
                            <h3 className='text-3xl text-yellow-400 font-mono'>With Comforts</h3>
                            <h2 className='text-white text-5xl font-serif'>Decorate Light</h2>
                            <button className='button'>Shop Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Offer;