import StarRateIcon from '@mui/icons-material/StarRate';
import Image from 'next/image';
import React from 'react';

const Recommendations = ({title,children,src}) => {
    return (
         <div className='relative py-5 '>
                    <div className="avatar absolute z-10 right-12 top-0 ">
                    <div className="w-14 rounded-full">
                        <Image width={100} height={100} src={src} alt='person'></Image>
                    </div>
                    </div>
                    <div className=''>
                    <div className="card  rounded-md bg-[#2C2C37] shadow-xl">
                    <div className="card-body text-left">
                    <h2 className=" text-white">{title}</h2>
                    <p className='text-xs text-[#6F6F73]'>{children}</p>
                    <button className=' rounded-3xl w-1/3 bg-black pb-1 text-yellow-600'><StarRateIcon fontSize='10'></StarRateIcon>
                    <StarRateIcon fontSize='10'></StarRateIcon>
                    <StarRateIcon fontSize='10'></StarRateIcon>
                    <StarRateIcon fontSize='10'></StarRateIcon>
                    </button>
                    </div>
                    </div>
                       
                    </div>
         </div>
    );
};

export default Recommendations;