import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import { pages } from '../components/navbar/NavBar';
import findPageTitle from '../utils/breadcrumbsUtils';

const Catalog = () => {
  const { '*': path = '' } = useParams();
  const fullPath = `/catalog/${path}`;
  const pageTitles = findPageTitle(fullPath, pages);
  const displayTitle = pageTitles.length > 0 ? pageTitles[pageTitles.length - 1] : 'Catalog';
  const isMobile = useMediaQuery('(max-width:1000px)');

  return (
    <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        px: '2%'
    }}>
      <Box sx={{
        flex: '0 0 auto',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}>
        <Divider sx={{ flex: 1, backgroundColor: '#b0b0b0', height: '3px' }} />
        <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold' }}>
          {displayTitle}
        </Typography>
        <Divider sx={{ flex: 1, backgroundColor: '#b0b0b0', height: '3px' }} />
      </Box>
      <Box sx={{
        flex: '1 1 auto',
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 2,
        p: 2,
      }}>
        <Box sx={{
          flex: isMobile ? '0 0 auto' : 1,
          backgroundColor: '#e0e0e0', 
          p: 2,
        }}>
          Box 1
        </Box>
        <Box sx={{
          flex: isMobile ? '1 1 auto' : 4,
          backgroundColor: '#c0c0c0', 
          p: 2,
        }}>
          Box 2
        </Box>
      </Box>
    </Box>
  );
};

export default Catalog;
