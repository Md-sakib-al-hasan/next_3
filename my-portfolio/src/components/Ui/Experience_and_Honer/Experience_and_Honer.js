import React from 'react';

const Experience_and_Honer = ({value,children}) => {
    return (
        <div className='text-xs flex items-center text-white'>
            <p className='text-2xl font-bold mr-4 text-[#FFC107]'>{value}</p>{children}

        </div>
    );
};

export default Experience_and_Honer;