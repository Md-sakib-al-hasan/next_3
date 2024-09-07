import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const MyComponent = () => {


  return (
    <div className='App'>
      <h1 className='flex items-center text-[12px]'>
        <IoIosArrowBack></IoIosArrowBack><span className='text-[#FFC107]'>code</span><IoIosArrowForward></IoIosArrowForward> I build <span className='ml-1'> </span>
        <span >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Personal website and E-commerce website ', ' Corporate Business website and Education website',]}
            loop={100000}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <IoIosArrowBack></IoIosArrowBack><span className='text-[#FFC107]'>code</span><IoIosArrowForward></IoIosArrowForward>
      </h1>
    </div>
  )
}

export default MyComponent;
