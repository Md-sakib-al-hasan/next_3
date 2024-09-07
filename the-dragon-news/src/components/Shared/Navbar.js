 "use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from "@/assets/logo.png"
import { IconButton, Stack } from '@mui/material';

//icon
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
    Pathname:"/categories"
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

function Navbar() {
 

  return (
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alter="logo"></Image>
          <Box className="text-center w-full">
            {Navitems.map((page) => (
              <Link key={page.Pathname} href={page.Pathname}><Button  className='text-white'>{page.route}</Button></Link>
            ))}
          </Box>
          <Box>
           <Stack direction="row" sx={{"& svg":{color:"white"}}}>
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
           </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;