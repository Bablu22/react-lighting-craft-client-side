import React, { useRef, useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth()
    const [rating, setRating] = useState(0)
    const nameRef = useRef()
    const descRef = useRef()

    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        const name = nameRef.current.value
        const img = user.photoURL
        const ratingStar = rating
        const description = descRef.current.value
        const newReview = { name, img, ratingStar, description }
        console.log(newReview);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    e.target.reset()
                }
            })
    }


    return (
        <div className='container mx-auto'>

            <div className='flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 "'>
                <h2 className="text-2xl font-bold border-b">Review</h2>
                <form onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                        <div className=" w-full px-3">
                            <label for="name" className="text-base leading-7 text-blueGray-500">Your Name</label>
                            <input
                                ref={nameRef}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="name"
                                className="w-full px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg  focus:outline-none focus:border-gray-500 apearance-none autoexpand"
                                required />
                        </div>
                        <div className="w-full px-3 py-2">
                            <label className="text-base leading-7 text-blueGray-500" for="description">Description</label>
                            <textarea
                                ref={descRef}
                                className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-gray-500 focus:outline-none  apearance-none autoexpand"
                                id="description"
                                type="text"
                                name="description"
                                placeholder="Description..."
                                required></textarea>
                        </div>
                        <div className='w-full px-3'>
                            <label className="text-xl leading-7 text-blueGray-500">Rating</label><br />
                            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                        </div>
                        <button
                            type="submit"
                            className='button w-full mx-auto'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;