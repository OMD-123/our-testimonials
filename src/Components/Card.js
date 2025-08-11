import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";


const Card = (props) => {
    let review = props.review;
    return (
        <div className="flex flex-col md:relative">

            <div className=" absolute top-[-70px]  mx-auto  z-10">
                <img className="aspect-square rounded-full w-[140px] h-[140px] bg-gray-300 flex items-center justify-center z-20 object-cover" src={review.image}/>
            </div>
            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-78px] z- 5"></div>

            <div  className="text-center mt-7 ">
                <p className="text-2xl font-bold text-gray-800 capitalize">
            {review.name }
                </p>
            </div>

         <div className="text-center mt-7 ">
            <p className="text-violet-300 uppercase ">{review.job}</p>
         </div>

         <div className="text-center mt-7 mx-auto text-violet-600">
            <FaQuoteLeft></FaQuoteLeft>
         </div>

            <div className="text-center mt-7 mx-auto w-[90%]">
                <p className="text-xl">{review.text}</p>
                </div>


          <div className="text-center mt-7 mx-auto text-violet-500">
            <FaQuoteRight></FaQuoteRight>
         </div>

 


        
        </div>
    );
};

export default Card;
 