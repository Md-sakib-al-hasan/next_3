import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const CheckBox = ({value}) => {
    return (
        <div className='flex items-center'>
            <CheckIcon sx={{ color:"#F4B908",fontSize:15 }} ></CheckIcon>
            <h2 className='text-xs text-[#6F6F73] pl-2 capitalize'>{value}</h2>
        </div>
    );
};

export default CheckBox;