import React, { useState } from 'react';
import { Box, Typography, List, ListItem, IconButton, useMediaQuery, Divider, Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { footerData } from '../../data/FooterData';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddIcon from '@mui/icons-material/Add';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Footer = () => {
  const navigate = useNavigate(); 
  const isMobile = useMediaQuery('(max-width:800px)');
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});

  const handleClick = (link: string) => {
    navigate(link);
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const handleToggleCategory = (title: string) => {
    setOpenCategories(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }));
  };

  return (
    <Box sx={{
        background: 'linear-gradient(to top, #232526, #414345)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '80px',
        pt: '2%'
    }}>
        <Box sx={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: 'wrap',
            padding: 2,
            gap: isMobile ? 0 : 4, 
            justifyContent: 'center', 
        }}>
            {footerData.map((category) => (
            <Box key={category.title} sx={{ textAlign: 'left', mb: 2 }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant={isMobile ? "h6" : "h4"} sx={{ marginBottom: isMobile ? 0 : 1, color: 'white', }}>
                        {category.title}
                    </Typography>
                    {isMobile && (
                        <IconButton 
                            onClick={() => handleToggleCategory(category.title)} 
                            sx={{ color: '#fff', padding: 0 }}
                        >
                            {openCategories[category.title] ? <ExpandLessIcon /> : <AddIcon />}
                        </IconButton>
                    )}
                </Box>
                {isMobile && <Divider sx={{ backgroundColor: '#fff', mb: 1 }} />}
                <Collapse in={!isMobile || openCategories[category.title]} timeout="auto" unmountOnExit>
                    <List sx={{ padding: 0, margin: 0 }}>
                        {category.items.map((item, index) => (
                            <ListItem onClick={() => handleClick(item.link)} key={index} sx={{
                                padding: 0,
                                cursor: 'pointer',
                                display: 'block', 
                            }}>
                            <Typography
                                variant="h6"
                                sx={{
                                color: '#fff',
                                position: 'relative',
                                display: 'inline-block',
                                '&:hover::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: '#fff',
                                    transform: 'scaleX(1)',
                                    transformOrigin: 'left',
                                    transition: 'transform 0.3s ease',
                                },
                                '&::after': {
                                    transform: 'scaleX(0)',
                                    transformOrigin: 'left',
                                    transition: 'transform 0.3s ease',
                                },
                                }}
                            >
                                {item.text}
                            </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                {isMobile && openCategories[category.title] && <Divider sx={{ mt: 2, backgroundColor: '#fff' }} />}
            </Box>
            ))}
            {/* CONTACTE Section */}
            <Box sx={{
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                mb: 2,
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant={isMobile ? "h6" : "h4"} sx={{ marginBottom: isMobile ? 0 : 1, color: 'white', }}>
                        Contacte
                    </Typography>
                    {isMobile && (
                        <IconButton 
                            onClick={() => handleToggleCategory('Contacte')} 
                            sx={{ color: '#fff', padding: 0 }}
                        >
                            {openCategories['Contacte'] ? <ExpandLessIcon /> : <AddIcon />}
                        </IconButton>
                    )}
                </Box>
                {isMobile && <Divider sx={{ backgroundColor: '#fff', mb: 1 }} />}
                <Collapse in={!isMobile || openCategories['Contacte']} timeout="auto" unmountOnExit>
                    <List sx={{ padding: 0, margin: 0 }}>
                        <ListItem sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            padding: 0,
                        }}>
                            <LocationOnIcon fontSize='small' sx={{ color: 'white' }} />
                            <Typography variant="body1" sx={{ color: 'white' }}>123 Main St, City, Country</Typography>
                        </ListItem>
                        <ListItem sx={{
                            display: 'flex',
                           	alignItems: 'center',
                            gap: 1,
                            padding: 0,
                        }}>
                            <PhoneIcon fontSize='small' sx={{ color: 'white' }} />
                            <Typography variant="body1" sx={{ color: 'white' }}>+123 456 7890</Typography>
                        </ListItem>
                        <ListItem sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            padding: 0,
                        }}>
                            <EmailIcon fontSize='small' sx={{ color: 'white' }} />
                            <Typography variant="body1" sx={{ color: 'white' }}>info@example.com</Typography>
                        </ListItem>
                    </List>
                </Collapse>
                {isMobile && openCategories['Contacte'] && <Divider sx={{ mt: 2, backgroundColor: '#fff' }} />}
                {/* Social Media Icons */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 2,
                    mt: 2
                }}>
                    <IconButton
                        onClick={() => handleExternalLink('https://www.instagram.com')}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid #fff',
                            transition: 'all 0.3s ease',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#000',
                            },
                        }}
                    >
                        <InstagramIcon  />
                    </IconButton>
                    <IconButton
                        onClick={() => handleExternalLink('https://www.facebook.com')}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid #fff',
                            transition: 'all 0.3s ease',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#000',
                            },
                        }}
                    >
                        <FacebookIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>

        <Box sx={{
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            padding: 2,
        }}>
            <Typography variant="body2">
            Copyright © 2024 www.emonumente.md
            </Typography>
        </Box>
    </Box>
  );
};

export default Footer;
