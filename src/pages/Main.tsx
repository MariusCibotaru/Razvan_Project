import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import { lightTheme, darkTheme } from '../utils/theme';
import Home from './Home';
import ScrollToTopButton from '../utils/ScrollToTopButton';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import BreadcrumbsComponent from '../components/breadcrumbs/Breadcrumbs';
import Catalog from './Catalog';

const Main = () => {
  const [theme, setTheme] = useState(lightTheme);
  const location = useLocation();
  const hideBreadcrumbs = location.pathname === '/'; 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box>
          <NavBar />
          <Toolbar id="back-to-top-anchor" />
        </Box>
  
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', width: '100%'}}>
          {!hideBreadcrumbs && <BreadcrumbsComponent />} 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog/*" element={<Catalog />} />
          </Routes>
        </Box>
        <Footer />
        <ScrollToTopButton />
      </Box>
    </ThemeProvider>
  );
};

export default Main;
