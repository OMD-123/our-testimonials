import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";


const Testimonial = (props) => {

    let reviews = props.reviews;
    const[index,setindex]=useState(0);

function leftshiftHandler(){
    if(index-1 < 0){
        setindex(reviews.length - 1);
    }
    else
    {
        setindex(index - 1);
    }
}



function rightShiftHandler(){
    if(index + 1 >= reviews.length){
        setindex(0);
    }
    else
    {
        setindex(index + 1);
    }

}




function surpriseHandler(){
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setindex(randomIndex);



}





return(
    <div className="flex flex-col items-center justify-center w-[85vw] md:w-[700px] bg-white rounded-lg shadow-lg p-10 mt-10 transition-all duration-200 hover:shadow-2xl " >
    <Card review={reviews[index]} className=""></Card>


             <div className="flex justify-center gap-7 mt-7 mx-auto w-[90%] text-3xl text-violet-500 font-bold">
     
                <button onClick={leftshiftHandler}
                 className="cursor-pointer hover:text-violet-800 "> <FiChevronLeft></FiChevronLeft></button>
    
                <button   onClick={rightShiftHandler}
                 className="cursor-pointer hover:text-violet-800 "><FiChevronRight></FiChevronRight></button>
    
             </div>
    
    
             <div 
              className="flex justify-center mt-7 mx-auto text-2xl">
                <button  className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 font-bold rounded-md text-lg text-white"
                 onClick={surpriseHandler}>Surprise me</button>
             </div>
</div>
)
 

};

export default Testimonial;
