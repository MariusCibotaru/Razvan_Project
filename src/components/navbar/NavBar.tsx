import React, { useState } from 'react';
import { AppBar, Toolbar, useMediaQuery, Typography, Box, Grid, Button, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Logo from '../../images/Logo/Elit.png'; 
import { useNavigate } from 'react-router-dom';
import MenuNav from './MenuNav';

export interface Subpage {
  title: string;
  link?: string;
  group?: string;  
  subpages?: Subpage[]; 
}
 
export interface Page {
  title: string;
  link?: string;
  subpages?: Subpage[];
}

export const pages: Page[] = [
  {
    title: 'Catalog',
    subpages: [
      {
        title: 'Monumente',
        group: 'Monumente',
        subpages: [
          { title: 'Monumente Verticale', link: '/catalog/monumente/monumente-verticale' },
          { title: 'Monumente Orizontale', link: '/catalog/monumente/monumente-orizontale' },
        ],
      },
      {
        title: 'Produse Din Granit',
        group: 'Produse Din Granit',
        subpages: [
          { title: 'Cruci Simple', link: '/catalog/produse-din-granit/cruci-simple' },
          { title: 'Cruci Duble', link: '/catalog/produse-din-granit/cruci-duble' },
        ],
      },
      {
        title: 'Mese si Scaune',
        group: 'Mese si Scaune',
        subpages: [
          { title: 'Plăci Simple', link: '/catalog/mese-si-scaune/placi-simple' },
          { title: 'Plăci Decorative', link: '/catalog/mese-si-scaune/placi-decorative' },
        ],
      },
    ],
  },
  {
    title: 'Servicii',
    subpages: [
      { title: 'Instalare monumente', link: '/servicii/instalare-monumente' },
      { title: 'Livrare monumente', link: '/servicii/livrare-monumente' },
      { title: 'Ingrijire monumente', link: '/servicii/ingrijire-monumente' },
    ],
  },
  {
    title: 'Procesul de Lucru',
    link: '/procesul-de-lucru',
  },
  {
    title: 'Lucrarile Noastre',
    link: '/lucrarile-noastre',
  },
  {
    title: 'Despre Noi',
    link: '/despre-noi',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:1000px)');
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>, title: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(title);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const handleNavigation = (link: string) => {
    navigate(link);  
    handleClose(); 
    setDrawerOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#ffffff',
        color: '#000000',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', p: 1, mx: isMobile ? 0 : 10 }}>

        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile ? (
              <MenuNav
                pages={pages}
                open={drawerOpen}
                handleOpen={() => setDrawerOpen(true)}
                handleClose={() => setDrawerOpen(false)}
                handleNavigation={handleNavigation}
              />
            ) : (
              <Button onClick={handleLogoClick} sx={{ p: 0, minWidth: 0, display: 'flex', alignItems: 'center' }}>
                <img src={Logo} alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
              </Button>
            )}
          </Grid>

          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            {isMobile ? (
              <Button onClick={handleLogoClick} sx={{ p: 0, minWidth: 0, display: 'flex', alignItems: 'center' }}>
                <img src={Logo} alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
              </Button>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {pages.map((page) => (
                  page.subpages ? (
                    <Box key={page.title} sx={{ position: 'relative' }}>
                      <Button
                        onClick={(event) => handleClick(event, page.title)}
                        sx={{ color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center' }}
                      >
                        <Typography variant='h6'>{page.title}</Typography>
                        {open && currentMenu === page.title ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={open && currentMenu === page.title}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                        PaperProps={{
                          sx: {
                            padding: 1,
                            borderRadius: 2,
                            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                          },
                        }}
                      >
                        {page.subpages.map((subpage) => (
                          subpage.subpages ? (
                            <Box key={subpage.title} sx={{ pl: 2 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>{subpage.group}</Typography>
                              {subpage.subpages.map((nestedSubpage) => (
                                <MenuItem key={nestedSubpage.title} onClick={() => handleNavigation(nestedSubpage.link || '#')}>
                                  {nestedSubpage.title}
                                </MenuItem>
                              ))}
                            </Box>
                          ) : (
                            <MenuItem key={subpage.title} onClick={() => handleNavigation(subpage.link || '#')}>
                              {subpage.title}
                            </MenuItem>
                          )
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={page.title}
                      onClick={() => handleNavigation(page.link || '#')}
                      sx={{ color: 'black', textTransform: 'none' }}
                    >
                      <Typography variant='h6'>{page.title}</Typography>
                    </Button>
                  )
                ))}
              </Box>
            )}
          </Grid>

          <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button
              onClick={(event) => handleClick(event, 'Ro')} 
              sx={{
                color: 'black',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography>Ro</Typography>
              {open && currentMenu === 'Ro' ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open && currentMenu === 'Ro'}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              PaperProps={{
                sx: {
                  padding: 1,
                  borderRadius: 2,
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <MenuItem>Ru</MenuItem>
            </Menu>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
