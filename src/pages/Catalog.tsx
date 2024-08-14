import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider, Typography } from '@mui/material';
import { pages } from '../components/navbar/NavBar';
import findPageTitle from '../utils/breadcrumbsUtils';

const Catalog = () => {
  const { '*': path = '' } = useParams();
  const fullPath = `/catalog/${path}`;
  const pageTitles = findPageTitle(fullPath, pages);

  const displayTitle = pageTitles.length > 0 ? pageTitles[pageTitles.length - 1] : 'Catalog';

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
    </Box>
  );
};

export default Catalog;
