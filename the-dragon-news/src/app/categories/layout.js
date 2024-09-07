import CategoriesList from '@/components/Ui/CategoriesList/CategoriesList';
import { Box, Grid } from '@mui/material';
import React from 'react';

const CategoryLayout = ({children}) => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                <CategoriesList></CategoriesList>
                </Grid>
                <Grid item xs={9}>
                 {children}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryLayout;