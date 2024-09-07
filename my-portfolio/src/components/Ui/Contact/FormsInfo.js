import React from 'react';
import Person from '@mui/icons-material/Person';

const FormsInfo = () => {
    return (
        <div className='bg-[#2C2C37] p-10 space-y-6 mb-10'>
            <div className='flex h-10'><div className='p-1 bg-black'><Person sx={{backgroundColor:'black'}}></Person></div><input className='w-full bg-[#15151b] pl-5 text-[12px] font-light' placeholder='Name'></input></div>
            <div className='flex h-10'><div className='p-1 bg-black'><Person sx={{backgroundColor:'black'}}></Person></div><input className='w-full bg-[#15151b] pl-5 text-[12px] font-light' placeholder='Email'></input></div>
            <div className='flex h-32'><div className='p-1 bg-black'><Person sx={{backgroundColor:'black'}}></Person></div><input className='w-full bg-[#15151b] pl-5 text-[12px] font-light' placeholder='Message'></input></div>
            <button className='uppercase text-xs bg-[#F4B908] py-3 text-black font-bold px-5'>send message</button>
        </div>
    );
};

export default FormsInfo;