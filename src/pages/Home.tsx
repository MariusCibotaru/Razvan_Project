import React from 'react';
import { Box } from '@mui/material';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Section5 from '../components/home/Section5';
import OverlaySection from '../components/home/OverlaySection';

const Home = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2, 
      width: '100%',
      position: 'relative', 
    }}>
      <Section1 />
      <OverlaySection /> 
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Box>
  );
};

export default Home;
