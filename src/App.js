import React from "react";
import Testimonial from "./Components/Testimonial.js";
import reviews from "./data";

  

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center  bg-gray-200">

    <div className="text-center ">
        <h1  className="text-3xl font-bold text-gray-800 ">
        Our Testimonials
      </h1>
    </div>

      <div className="bg-violet-400 h-[4px] w-[250px] " > </div>

      <Testimonial   reviews={reviews}></Testimonial>





    </div>
   
  );
};

export default App;
