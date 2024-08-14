import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Fon from '../../images/Section1/hero.jpg';

const Section1 = () => {
  const isMobile = useMediaQuery('(max-width:1000px)');

  return (
    <Box sx={{
      minHeight: isMobile ? '45vh' : '80vh',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2,
      backgroundImage: `url(${Fon})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
    }}>
    </Box>
  );
};

export default Section1;
