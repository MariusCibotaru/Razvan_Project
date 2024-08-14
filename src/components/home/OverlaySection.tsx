import React from 'react';
import { Box } from '@mui/material';
import OverlayData from '../../data/OverlayData';
import OverlayCard from '../card/OverlayCard';

const OverlaySection = () => {
  return (
    <Box sx={{
        width: '100%', 
        position: 'relative', 
        marginBottom: '-15vh', 
        zIndex: 2, 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2, 
        flexWrap: 'wrap', 
        padding: 2, 
    }}>
      {OverlayData.map((item, index) => (
        <OverlayCard key={index} image={item.image} title={item.title} services={item.services} />
      ))}
    </Box>
  );
};

export default OverlaySection;
