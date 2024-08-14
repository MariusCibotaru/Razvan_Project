import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box, Typography, Divider, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Page } from './NavBar'; 

interface MenuNavProps {
  pages: Page[];
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleNavigation: (link: string) => void;
}

const MenuNav: React.FC<MenuNavProps> = ({ pages, open, handleOpen, handleClose, handleNavigation }) => {
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  useEffect(() => {
    const allSubGroups = pages
      .flatMap(page => page.subpages ? page.subpages.filter(subpage => subpage.subpages).map(subpage => subpage.group || '') : [])
      .filter(Boolean);

    setOpenGroups(allSubGroups);
  }, [pages]);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const isGroupOpen = (title: string) => openGroups.includes(title);

  return (
    <Box>
      <IconButton onClick={handleOpen} sx={{ color: 'black' }}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box sx={{ width: 300, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <Typography variant="h5" onClick={() => {handleNavigation('/')}} sx={{ fontWeight: 'bold', textAlign: 'center', flexGrow: 1, cursor: 'pointer' }}>
              ELIT MONUMENTE
            </Typography>
            <IconButton onClick={handleClose} sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {pages.map((page) => (
              <React.Fragment key={page.title}>
                <ListItem 
                  button 
                  onClick={page.subpages ? () => toggleGroup(page.title) : () => handleNavigation(page.link || '#')}
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography variant="h6">
                    {page.title}
                  </Typography>
                  {page.subpages && (
                    isGroupOpen(page.title) ? <ExpandLessIcon /> : <ExpandMoreIcon />
                  )}
                </ListItem>
                {page.subpages && (
                  <Collapse in={isGroupOpen(page.title)} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {page.subpages.map((subpage) => (
                        <React.Fragment key={subpage.title}>
                          <ListItem 
                            button 
                            onClick={subpage.subpages ? () => toggleGroup(subpage.group || '') : () => handleNavigation(subpage.link || '#')}
                            sx={{ pl: 4 }}
                          >
                            <Typography 
                              variant="body1" 
                              sx={{ fontWeight: subpage.group ? 'bold' : 'normal' }}
                            >
                              {subpage.group || subpage.title}
                            </Typography>
                            {subpage.subpages && (
                              isGroupOpen(subpage.group || '') ? <ExpandLessIcon /> : <ExpandMoreIcon />
                            )}
                          </ListItem>
                          {subpage.subpages && (
                            <Collapse in={isGroupOpen(subpage.group || '')} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {subpage.subpages.map((nestedSubpage) => (
                                  <ListItem 
                                    key={nestedSubpage.title} 
                                    button 
                                    sx={{ pl: 8 }} 
                                    onClick={() => handleNavigation(nestedSubpage.link || '#')}
                                  >
                                    <ListItemText primary={nestedSubpage.title} />
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          )}
                        </React.Fragment>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MenuNav;
