"use client";

import IncrementPercentage from "./incrementPercentage";


export default function CircularWithValueLabel({value,language}) {
    
     const progress = IncrementPercentage(value);
  return (
    <div className='text-center space-y-2'>
       <div className="radial-progress text-[#F4B908]" style={{"--value":progress, "--size": "3rem", "--thickness": "3px" }} role="progressbar"><span className='text-xs font-light'>{progress}%</span></div>
      <h5 className='text-xs font-light'>{language}</h5>
    </div>
  );
}
