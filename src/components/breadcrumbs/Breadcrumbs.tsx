import React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import findPageTitles from '../../utils/breadcrumbsUtils';
import { pages } from '../navbar/NavBar';

const BreadcrumbsComponent: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const titles = findPageTitles(location.pathname, pages);
  console.log(titles)

  return (
    <Box sx={{ p: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} to="/" color="inherit">
          Home
        </Link>
        {titles.map((title, index) => (
          <Typography key={index} color="textPrimary" variant="body1">
            {title}
          </Typography>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsComponent;
