import Link from 'next/link';
import React from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
const MyServices = ({title,children}) => {
    return (
        <div className="card  rounded-md bg-[#2C2C37] shadow-xl">
        <div className="card-body">
          <h2 className=" text-white">{title}</h2>
          <p className='text-xs text-[#6F6F73]'>{children}</p>
          <Link href="/"><button className='uppercase text-[10px] font-bold text-[#F4B908] flex items-center'> <span className='mr-2'>order now</span> <IoIosArrowForward></IoIosArrowForward> </button></Link>
        </div>
      </div>
    );
};

export default MyServices;