"use client";

import IncrementPercentage from "./incrementPercentage";




const Progress = ({value,programming_lang}) => {
    const process = IncrementPercentage(value);
    
    
    return (

     <div>
      
       <di className="flex justify-between text-xs text-[#6F6F73]  mt-5 mb-1">
       <h1>{programming_lang}</h1>
       <p >{process}%</p>
       </di>
      <div className="w-full bg-black rounded-full h-1 ">
      <div
        className="h-full rounded-full transition-all duration-300 ease-linear"
        style={{ width: `${process}%`, backgroundColor: '#F4B908' }}
      ></div>
    </div>
     </div>
    );
};

export default Progress;