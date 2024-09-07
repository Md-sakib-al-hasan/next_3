import { Box, Typography } from "@mui/material";
import { Container } from "postcss";
import image from "@/assets/The Dragon News.png"
import Image from "next/image";
import { showCurrentDateInfo } from "@/Utils/getCurrentDate";


const Header = () => {
    const currentdate = showCurrentDateInfo();
    return (
        <Box className="w-full">
            
              <Image className="mx-auto" src={image} alt="HeaderImage"></Image>
            
            <Typography variant='body2' className=' text-center'>
              journalis without Fear or Fearout
           </Typography>
            <Typography variant='body2' className=' text-center'>
              {currentdate}
           </Typography>
        </Box>
    );
};

export default Header;