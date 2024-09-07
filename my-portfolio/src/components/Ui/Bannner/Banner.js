import React from 'react';
import MyComponent from './Typewriting';
import Image from 'next/image';


const Banner = () => {
    return (
        <div>
            <div className="hero h-[325px]" style={{backgroundImage: 'url(https://i.ibb.co/rZ3vB27/river-4245261.jpg)'}}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content  text-neutral-content">
                    <div className=" absolute left-20  space-y-5">
                     
                    <h1 className=" text-4xl font-bold">Discover my Amazing <br></br> worke !</h1>
                    <MyComponent></MyComponent>
                    <button className="py-3 px-10 bg-[#FFc107] border-none text-black text-xs uppercase">explore now</button>
                    </div>
                </div>
                <div className='absolute right-3 mt-2'>
                <Image src="https://i.ibb.co/9ctttq3/sakib.png" width="300" height="800"  alt="person"></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;