import React from 'react';

const Aboutepage = ({ params }) => {
    console.log(params)
    return (
        <div>
            <p className='text-4xl text-red-300'>This is about page</p>
        </div>
    );
};

export default Aboutepage;