import { Box } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import image from "@/assets/side-top-news.png"
import Image from 'next/image';

const Sidebear = () => {
    return (
        <Box className="mt-5">
        <Card>
      <CardActionArea>
        <CardMedia>
            <Image src={image} alt='top-new' width={800} ></Image>
        </CardMedia>
        <CardContent>
            <p className="w-[100px] bg-red-500 text-white px-1 my-5 rounded-md">Techonology</p>
          <Typography gutterBottom variant="h5" component="div">
            Bitconi Climbs as Elon musk says tesla lIkey to Accept il Agiain
          </Typography>
          <Typography gutterBottom className='my-3' >
             By sakib  Tanmoy -Mar 18 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Box>
    );
};

export default Sidebear;