"use client"
import Men from '@/components/Shared/RightSidebear/Men';
import { LiaCopyrightSolid } from "react-icons/lia";
import Banner from '@/components/Ui/Bannner/Banner';
import Experience_and_Honer from '@/components/Ui/Experience_and_Honer/Experience_and_Honer';
import MyServices from '@/components/Ui/MyServices/MyServices';
import Recommendations from '@/components/Ui/Recommendations/Recommendations';
import { Grid } from '@mui/material';
import { use, useState } from 'react';

const Homepage = () => {
       const [state,setState] = useState(true)

       const statehanderler = () => {
         setState(!state)
       }
  return (

         <Grid container>
            <Grid item xs={`${!state?10:11}`}>
            <div className={`  duration-700 h-screen mt-5 ml-10  relative `}>
            <div className=" w-full  rounded-md absolute max-h-screen bottom-9 top-0">
               <Banner></Banner>
               <div className='flex justify-between my-5 mx-2'>
               <Experience_and_Honer value={0}>Years Experience</Experience_and_Honer>
               <Experience_and_Honer value={0}>Completed Projects</Experience_and_Honer>
               <Experience_and_Honer value={0}>Happy Customers</Experience_and_Honer>
               <Experience_and_Honer value={0}>Honors and Awaras</Experience_and_Honer>
               </div>
               <h1 className='text-xl font-bold mb-4'>MY Services</h1>
               <div className="grid grid-cols-3 gap-4">
                  
                  <MyServices title="Web Development">{`I am a student of diploma in computer science . I am using  HTML5, CSS ,JavaScript,Tailwind,Bootstrap,React Node.js(Basiconly), json Web Tokens (Basic only), firebase(Basic only), MongoDB Next.js for web development click below button to create your website`}</MyServices>
                  <MyServices title="Write Document">I can present any document very nicely and attractively and these documents can be of various types like Wikipedia, various books and other official documents.If you want to do any such work, click the button below to do this</MyServices>
                  <MyServices title="Microsoft Office">Can work on any document with Microsoft Office, any Slite and normal Excel and present them very nicely through the document.If you want to do any such work, click the button below to do this</MyServices>
               </div>
               <h1 className='text-xl font-bold my-6'>Recommendations</h1>
               <div className='grid grid-cols-2 gap-4'>
                  <Recommendations title="NM Naeem Islam" src="https://i.ibb.co/8cYhzfs/247708048-423456392531226-5295894135862364241-n.jpg">{`I recently worked with an excellent web developer who exceeded my expectations. Their expertise, attention to detail, and ability to meet deadlines were impressive. If you're looking for someone to bring your web projects to life with professionalism and creativity, I highly recommend their services. You won't be disappointed!`}</Recommendations>
                  <Recommendations title="Kamrul Islam Ayon" src="https://i.ibb.co/b6dcJS6/352092442-563007995770756-8484717443888559865-n.jpg">{`I highly recommend this web developer for your next project. They have a keen eye for design, exceptional technical skills, and deliver on time. Their ability to understand client needs and create user-friendly websites is outstanding. Working with them was a seamless experience, and the results were impressive.`}</Recommendations>
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

export default Homepage;