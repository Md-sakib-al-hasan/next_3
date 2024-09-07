import Link from 'next/link';
import React from 'react';

const Card = ({title,src,link,dis}) => {
  return (
    <div className="grid place-items-center  bg-neutral-900 ">
      <div className="relative w-full overflow-hidden rounded-lg transition-transform duration-500 transform hover:scale-105 focus-within:scale-105 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }}>
        <div className="pt-6  bg-gradient-to-t from-black via-black/30 to-transparent transition-transform duration-500 transform hover:translate-y-0 focus-within:translate-y-0 translate-y-2/3">
          <h2 className="relative top-5 hover:top-11 text-white text-2xl">
            {/* <span className="absolute bottom-[-2px] left-0 w-full h-1 bg-accent-400 transform scale-x-0 transition-transform duration-500 origin-left hover:scale-x-100 focus-within:scale-x-100"></span> */}
          </h2>
          <div className="mt-10 w-full  text-white/85 bg-[#2C2C37] py-3 pl-5 ">
            <p className='font-bold my-4 '>{title}</p>
            <p className='text-xs mb-2 text-gray-500'>{dis}</p>
            <Link href={link}><button className='text-xs text-[#f4b908]'>See More</button></Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
