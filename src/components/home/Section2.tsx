import React from 'react';
import { Box, Button, Divider, Typography, useMediaQuery } from '@mui/material';
import { workingStages } from '../../data/WorkingStages';
import WorkingStagesCard from '../card/WorkingStagesCard';

const Section2 = () => {
  const isMobile = useMediaQuery('(max-width:1000px)');

  return (
    <Box sx={{
      minHeight: '90vh',
      backgroundColor: '#e0e0e0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4%',
      width: '100%',
      position: 'relative',
      zIndex: 1,
    }}>
      <Box sx={{
        flex: '0 0 auto',
        width: '100%',
        textAlign: 'center',
        padding: '2%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        mt: isMobile ? '15vh' : '10vh',
      }}>
        <Divider sx={{ flex: 1, backgroundColor: '#b0b0b0', height: '3px' }} />
        <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold' }}>
          PROCESUL DE LUCRU
        </Typography>
        <Divider sx={{ flex: 1, backgroundColor: '#b0b0b0', height: '3px' }} />
      </Box>

      <Box sx={{
        flex: '1 1 auto',
        width: '100%',
        p: '2%',
        pb: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2,
      }}>
        {workingStages.map((stage, index) => (
          <WorkingStagesCard 
            key={index}
            title={stage.title}
            description={stage.description}
            icon={stage.icon} 
          />
        ))}
      </Box>

      <Box sx={{
        flex: '0 0 auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        mt: 4,
      }}>
        <Button 
          variant="contained" 
          sx={{
            backgroundColor: '#82242e',
            py: 2,
            px: 4,
            color: '#fff',
            '&:hover': {
              backgroundColor: '#9c303a',
            },
          }}
        >
          Comandati o Consultatie
        </Button>
      </Box>
    </Box>
  );
};

export default Section2;
