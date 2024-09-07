"use client"
import Men from '@/components/Shared/RightSidebear/Men';
import { LiaCopyrightSolid } from "react-icons/lia";
import { Grid } from '@mui/material';
import { use, useState } from 'react';
import Card from '@/components/Shared/Card/Card';


const Webpage = () => {
       const [state,setState] = useState(true)

       const statehanderler = () => {
         setState(!state)
       }
  return (

         <Grid container>
            <Grid item xs={`${!state?10:11}`}>
            <div className={`  duration-700 h-screen mt-5 ml-10  relative`}>
            <div className=" w-full  rounded-md absolute max-h-screen bottom-9 top-0">
            <div className=" grid grid-cols-3 gap-4 mb-10">

            <Card src="https://i.ibb.co/XbqY5wF/Flower-shop.png" title="Flowers" link="https://md-sakib-al-hasan.github.io/flower_shop/" dis="Here use html,css,tailwinds"/>
            <Card src="https://i.ibb.co/0rtzxPy/Game.png" title="Game" link="https://md-sakib-al-hasan.github.io/Gaming_webdevelopmant/" dis="Here use html,css,tailwinds"/>
            <Card src="https://i.ibb.co/kJ7tKQC/frutes.png" title="Frutes" link="https://md-sakib-al-hasan.github.io/B8A3-fruit-brust/" dis="Here use html,css,tailwinds"/>
            <Card src="https://i.ibb.co/1RJp2Z0/Music.png" title="Music" link="https://magenta-group.surge.sh/" dis="Here use html,css,tailwinds,react"/>
            <Card src="https://i.ibb.co/D4XHK4M/denet.png" title="Music" link="https://magenta-group.surge.sh/" dis="Here use html,css,tailwinds,react"/>
            <Card src="https://i.ibb.co/K952M22/Screenshot-2024-06-24-135553.png" title="Music" link="https://github.com/Md-sakib-al-hasan/React" dis="Here use html,css,tailwinds,react"/>
            <Card src="https://i.ibb.co/jykN8Kx/Screenshot-2024-06-24-135345.png" title="Music" link="https://github.com/Md-sakib-al-hasan/React/tree/main/Amagon" dis="Here use html,css,tailwinds,react"/>
            <Card src="https://i.ibb.co/XbqY5wF/Flower-shop.png" title="Music" link="https://magenta-group.surge.sh/" dis="Here use html,css,tailwinds,react"/>
           
            
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

export default Webpage;