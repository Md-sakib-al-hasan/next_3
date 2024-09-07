"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Image from 'next/image';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#FFC107',
      position:'absolute',
      top:75,
      right:15,
      color: '#FFC107',
      boxShadow: `0 0 0 2px #FFC107`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  



const Profile = () => {
    return (
        <Stack direction="row" spacing={2}>
        <StyledBadge
        
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >

            <div className="avatar">
            <div className="w-24 rounded-full">
                <Image width={100} height={100} src="https://i.ibb.co/L1pGJBg/sakib2.png" alt="profile"></Image>
            </div>
            </div>
            
        </StyledBadge>
      </Stack>
    );
};

export default Profile;