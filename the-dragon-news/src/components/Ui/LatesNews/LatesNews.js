import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import image from "@/assets/top-news.png"
import image2 from "@/assets/top-news2.png"
import Image from 'next/image';

const LatesNews = () => {
    return (
        <Box className='my-5'>
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
    <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Card>
      <CardActionArea>
        <CardMedia>
            <Image src={image2} alt='top-new' width={800} ></Image>
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
        </Grid>
        <Grid item xs={6}>
        <Card>
      <CardActionArea>
        <CardMedia>
            <Image src={image2} alt='top-new' width={800} ></Image>
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
        </Grid>
        <Grid item xs={6}>
        <Card>
      <CardActionArea>
        <CardMedia>
            <Image src={image2} alt='top-new' width={800} ></Image>
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
        </Grid>
        <Grid item xs={6}>
        <Card>
      <CardActionArea>
        <CardMedia>
            <Image src={image2} alt='top-new' width={800} ></Image>
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
        </Grid>
        
    </Grid>
            
        </Box>
    );
};

export default LatesNews;