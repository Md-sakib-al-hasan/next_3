import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Navitems = [
    {
    route:"Home",
    Pathname:"/"
   },
    {
    route:"Pages",
    Pathname:"/pages"
   },
    {
    route:"Category",
    Pathname:"/category"
   },
    {
    route:"News",
    Pathname:"/news"
   },
    {
    route:"About",
    Pathname:"/"
   },
    {
    route:"Contact",
    Pathname:"/contact"
   },
    
]

const Footer = () => {
    return (
        <Box className='bg-black px-2 py-10'>
            <Container>
            <Box className="w-full text-center" sx={{"& svg":{color:"white"}}}>
           <IconButton>
             <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
             <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
             <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
             <FacebookIcon></FacebookIcon>
            </IconButton>
    
          </Box>
          <Box className="text-center w-full">
            {Navitems.map((page) => (
              <Link key={page.Pathname} href={page.Pathname}><Button  className='text-white'>{page.route}</Button></Link>
            ))}
          </Box>
           <Typography variant='body2' className='text-white text-center'>
              @2023  The Dragon News.Design by sakib
           </Typography>
            </Container>
        </Box>
    );
};

export default Footer;