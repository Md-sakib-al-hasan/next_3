import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

Dopmeno
export default function Dopmeno({children}) {
  return (
    <div className='relative'>
      <Accordion sx={{backgroundColor:'#24242E',color:"white",fontSize:"12px",fontWeight:"bold"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
          aria-controls="panel1-content"
        >
          {children}
        </AccordionSummary>
        <AccordionDetails  >
          <div className='flex flex-col text-white space-y-2 '>
          <Link href="/">Colum1</Link>
         <Link href="/">Colum2</Link>
         <Link href="/">Colum3</Link>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}