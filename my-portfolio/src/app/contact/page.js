"use client"
import Men from '@/components/Shared/RightSidebear/Men';
import { LiaCopyrightSolid } from "react-icons/lia";
import Banner from '@/components/Ui/Bannner/Banner';
import Experience_and_Honer from '@/components/Ui/Experience_and_Honer/Experience_and_Honer';
import MyServices from '@/components/Ui/MyServices/MyServices';
import Recommendations from '@/components/Ui/Recommendations/Recommendations';
import { Grid } from '@mui/material';
import { use, useState } from 'react';
import Residence from '@/components/Ui/Contact/Residence';
import ContactInfo from '@/components/Ui/Contact/Contactinfo';
import OfficeInfo from '@/components/Ui/Contact/Officeinfo';
import FormsInfo from '@/components/Ui/Contact/FormsInfo';

const Contactpage = () => {
       const [state,setState] = useState(true)

       const statehanderler = () => {
         setState(!state)
       }
  return (

         <Grid container>
            <Grid item xs={`${!state?10:11}`}>
            <div className={`  duration-700 h-screen mt-5 ml-10  relative`}>
            <div className=" w-full  rounded-md absolute max-h-screen bottom-9 top-0">
             <h1 className='font-bold text-xl my-5'>Contact information</h1>
             <div className="flex gap-5 ">
               <Residence></Residence>
               <ContactInfo></ContactInfo>
               <OfficeInfo></OfficeInfo>
             </div>
             <h1 className='font-bold text-xl my-3'>Get in touch</h1>
             <FormsInfo></FormsInfo>
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

export default Contactpage;