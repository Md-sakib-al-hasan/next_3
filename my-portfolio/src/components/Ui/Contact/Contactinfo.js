import React from 'react';

const ContactInfo = () => {
    return (
        <div>
             <div className=" rounded-md bg-[#2C2C37] shadow-xl ">
        <div className=" flex p-5 text-xs">
            <div className='mr-10 space-y-2 '>
              <p>Email:</p>
              <p>whatsapp:</p>
              <p>Phone:</p>
            </div>
            <div className='text-right space-y-2 text-gray-500'>
                <p>md.sakib.al.hasan.programmer@gmail.com</p>
                <p>01625457343</p>
                <p>01625457343</p>
            </div>
        </div>
            </div>
            
        </div> 
    );
};

export default ContactInfo;