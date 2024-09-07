"use client"
import Men from '@/components/Shared/RightSidebear/Men';
import { LiaCopyrightSolid } from "react-icons/lia";
import { Grid } from '@mui/material';
import { use, useState } from 'react';
import Card from '@/components/Shared/Card/Card';

const Programing = () => {
       const [state,setState] = useState(true)

       const statehanderler = () => {
         setState(!state)
       }
  return (

         <Grid container>
            <Grid item xs={`${!state?10:11}`}>
            <div className={`  duration-700 h-screen mt-5 ml-10   relative`}>
            <div className=" w-full  rounded-md absolute max-h-screen bottom-9 top-0">
            <div className=" grid grid-cols-3 gap-4 mb-10">
            <Card dis="Click the button below to learn more about Algorithm and the project" src="https://i.ibb.co/GMN3RMt/Instagram-Algorithm-in-2023-V3-01.jpg" title="Algorithm" link="https://github.com/Md-sakib-al-hasan/algorithm_phitor"/>
            <Card dis="Click the button below to learn more about ongoDB and the project" src="https://i.ibb.co/pfT2sjh/images-1.jpg" title="MongoDB" link="https://github.com/Md-sakib-al-hasan/MongoDB-and-Express-js"/>
            <Card dis="Click the button below to learn more about Next.js and the project" src="https://i.ibb.co/Rj7yCdD/images.jpg" title="Next.js" link="https://github.com/Md-sakib-al-hasan/Next.js"/>
            <Card dis="Click the button below to learn more about React and the project" src="https://i.ibb.co/qYHn3Lh/1624637761724.png" title="React" link="https://github.com/Md-sakib-al-hasan/React"/>
            <Card dis="Click the button below to learn more about JavaScripts and the project" src="https://i.ibb.co/HV4mS2c/images.png" title="JavaScripts" link="https://github.com/Md-sakib-al-hasan/Javascripts"/>
            <Card dis="Click the button below to learn more about Data Structure  and the project" src="https://i.ibb.co/c2FYncJ/1675012140861.jpg" title="Data Structure" link="https://github.com/Md-sakib-al-hasan/Data_strcture"/>
            <Card dis="Click the button below to learn more about Djanog and the project" src="https://i.ibb.co/L5T0206/Django-Featured-Image.jpg" title="Djanog" link="https://github.com/Md-sakib-al-hasan/Django_phitron"/>
            
            </div>
              
             <div className='bg-[#111113] pb-10'>
             <div className='w-full rounded-sm bg-[#2C2C37] py-5 flex justify-between px-5'>
               <p className='flex items-center text-xs'><LiaCopyrightSolid></LiaCopyrightSolid>2024 Sakib al hasan</p>
               <p className='text-xs'>Email:md.sakib.al.hasan.programmer@gmail.com</p>
           </div>
           </div>
            </div>
            
        </div>
          </Grid>          
        
            <Grid item xs={`${!state?2:1}`}>
            <div className={` h-screen mt-5 ml-5 relative`}>
           <Men statehanderler={statehanderler} value={state} ></Men>
         </div>

            </Grid>
           
        </Grid>
         

        
  );
};

export default Programing;