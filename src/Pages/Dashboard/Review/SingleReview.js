import React from 'react';
import Rating from 'react-rating'

const SingleReview = ({ review }) => {
    const { name, img, ratingStar, description } = review



    return (
        <div class="font-sans py-28 w-full flex flex-row justify-center items-center">
            <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
                {img !== null ? <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={img} alt="" /> :
                    <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white bg-green-200" src={`https://ui-avatars.com/api/?name=${name}`} alt="" />
                }
                <div class="text-center mt-2 text-2xl font-medium">{name}</div>
                <div class="px-6 text-center mt-2 font-light text-sm">
                    <p>
                        {description}
                    </p>
                </div>
                <hr class="mt-8" />
                <div class="flex p-4 justify-center">
                    <Rating
                        emptySymbol="fa fa-star-o fa-x text-yellow-500"
                        fullSymbol="fa fa-star fa-x text-yellow-500"
                        initialRating={ratingStar}
                        readonly
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleReview;