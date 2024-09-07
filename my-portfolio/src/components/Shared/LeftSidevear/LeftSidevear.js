import { Avatar, Checkbox } from "@mui/material";
import Profile from "./Avatar";
import { TiSocialLinkedin } from "react-icons/ti";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import Link from "next/link";
import CircularWithValueLabel from "./ProgressBar";
import Progress from "./Progress";
import CheckBox from "./Checkbox";
import DownloadIcon from '@mui/icons-material/Download';




// bg-[#24242E]
const LeftSidevear = () => {
    
    return (
        <div className=" w-full h-screen relative m-5">
            <div className="w-full rounded-md absolute max-h-screen bottom-9 top-0 ">
               <div>
                  {/* profile */}
                  <div className="flex rounded-md bg-[#24242E] flex-col justify-center items-center  space-y-2 pt-6 pb-1">
                    <Profile></Profile>
                    <h1 className="capitalize font-bold text-lg">sakib al hasan</h1>
                    <h3 className="text-xs text-center text-[#6F6F73] space-y-3 ">Front-end Developers  and <br></br> Back-end Developers </h3>
                    </div>
                   {/* knowledge */}

                   <div  className=" absolute w-full pt-5  bg-[#24242E]  top-50 rounded-md  flex">
                    <di className=" w-full xl:h-[480px] 2xl:h-[670px] overflow-scroll no-scrollbar">
                        <div className="w-[80%] mx-auto">
                            
                            <div className="  flex border-b-2 p-3 border-gray-700">
                                <div className="w-[50%] space-y-1 text-[12px]">
                                    <h5>Residence:</h5>
                                    <h5>City:</h5>
                                    <h5>Age:</h5> 
                                </div>
                                <div className="w-[50%] text-end space-y-1 text-[12px]">
                                <h5>Bangladesh</h5>
                                    <h5>Savar</h5>
                                    <h5>21</h5> 
                                </div>
                            </div>
                            <div className="flex space-x-2  justify-evenly py-12  border-b-2  border-gray-700">
                            <CircularWithValueLabel language="Bangla" value="90"></CircularWithValueLabel>
                            <CircularWithValueLabel language="English" value="60"></CircularWithValueLabel>
                            <CircularWithValueLabel language="Korean" value="10"></CircularWithValueLabel>
                            </div>
                            <div className=" pb-8  border-b-2  border-gray-700 ">
                             <Progress programming_lang="html" value="95" ></Progress>
                             <Progress programming_lang="css" value="90" ></Progress>
                             <Progress programming_lang="JavaScript" value="60" ></Progress>
                             <Progress programming_lang="TailWind" value="80" ></Progress>
                             <Progress programming_lang="React" value="89" ></Progress>
                             <Progress programming_lang="Firebase" value="40" ></Progress>
                             <Progress programming_lang="MongoDB" value="50" ></Progress>
                             <Progress programming_lang="Json Web Tokens" value="20" ></Progress>
                             <Progress programming_lang="Next.js" value="20" ></Progress>
                             <Progress programming_lang="Node.js" value="20" ></Progress>
                            </div>
                            <div className="space-y-3 py-8 border-b-2  border-gray-700">
                               <CheckBox value={"computer science and engineering(CSE)"}></CheckBox>
                               <CheckBox value={" Secondary School Certificate (SSC) "}></CheckBox>
                               <CheckBox value={"Junior School Certificate (JSC)"}></CheckBox>
                            </div>
                            <div className="py-2">
                             
                             <Link href="https://drive.google.com/uc?export=download&id=1T8n5878u6fiKp72KenfE8HlnTY1VAdao">
                             <button className="uppercase text-[10px] font-bold  text-[#6F6F73] hover:text-white"><span className="pr-1">DownLoad Cv</span>
                                <DownloadIcon sx={{fontSize:12}}></DownloadIcon>
                             </button>
                             </Link>
            
                            </div>
                             
                            
                        </div>
    
                    </di>  
                   </div>
                   {/* social midia linked */}
                   <div className="absolute bottom-[-5px] w-full text-center rounded-md bg-[#24242E] p-2">
                     <div className="flex justify-evenly">
                        
                     <Link href="https://www.linkedin.com/feed/"><TiSocialLinkedin /></Link>
                     <Link href="https://www.facebook.com/profile.php?id=100091417794486"><GrFacebookOption /></Link>
                     <Link href="https://github.com/Md-sakib-al-hasan"><IoLogoGithub /></Link>
                     <Link href="https://mail.google.com/"><CgMail /></Link>
                     {/* <Link href="/"><FaWhatsapp /></Link> */}
                        
                     </div>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default LeftSidevear;