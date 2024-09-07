"use client"
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import CloseIcon from '@mui/icons-material/Close';
import styled from "./Men.module.css"
import Link from 'next/link';
import ActiveNavitem from './ActiveNavitem';
import Dopmeno from './Dopmeno';


const Men = ({statehanderler,value,}) => {
       
    return (
            <div className={` w-full duration-700  bg-[#24242E]   rounded-md absolute max-h-screen  right-0 bottom-7 top-0`}>
            <button onClick={statehanderler}>{value?<div className='py-6 px-6 bg-[#19191f] pl-6'><GiHamburgerMenu fontSize="20"></GiHamburgerMenu></div>:<div className='mt-4 ml-2'><CloseIcon></CloseIcon></div>}</button>
            {value?<div className='mt-14 text-center'>
                   {true?<Link href="/"><button className={`${styled.vertical_rl} ${styled.text_mixed}`}>
                          Home
                </button></Link>:<Link href="/"><button className={`${styled.vertical_rl} ${styled.text_mixed}`}>
                          History
                </button></Link>}
            </div>:<div className=' absolute top-1/3'>
                    <ActiveNavitem href="/">HOME</ActiveNavitem>
                    <br></br>
                    <ActiveNavitem href="/programing">PROGRAMING</ActiveNavitem>
                    <Dopmeno>PROTFOLIO</Dopmeno>
                    <ActiveNavitem href="/website">WEBSITES</ActiveNavitem>
                    
                     <div className='m-3'></div>
                    <ActiveNavitem href="/contact">CONTACT</ActiveNavitem>
                    <Dopmeno>BLOG</Dopmeno>
                    <ActiveNavitem href="/">PROBLEMSolVING</ActiveNavitem>
                    
                </div>}
            <di className="flex flex-col absolute bottom-0 left-0 right-0 py-16  bg-[#19191f]">
               <button className='bg-[black] absolute text-white rounded-full p-1 top-8 left-2 text-xs'>Ba</button>
               <button className='bg-[#FFC107] absolute   text-slate-950 rounded-full p-1 left-2 text-xs'>En</button>
            </di>
            
            </div>
    );
};

export default Men;