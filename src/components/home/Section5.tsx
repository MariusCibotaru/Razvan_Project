import React, { useState } from 'react';
import { Box, Typography, Divider, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { reviewsData } from '../../data/ReviewsData';
import ReviewCard from '../card/ReviewCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Section5 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:1000px)');
  const VISIBLE_CARDS = isSmallScreen ? 1 : 2;
  const CARD_WIDTH_PERCENTAGE = 100 / VISIBLE_CARDS;
  const GAP_PERCENTAGE = 2; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= reviewsData.length - VISIBLE_CARDS;

  const handleNext = () => {
    if (currentIndex < reviewsData.length - VISIBLE_CARDS) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
    <Box sx={{
      backgroundColor: '#e0e0e0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4%',
      gap: 4,
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
      }}>
        <Divider sx={{ flex: 1, backgroundColor: '#b0b0b0', height: '3px' }} />
        <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold' }}>RECENZII</Typography>
        <Divider sx={{ flex: 1, backgroundColor: '#b0b0b0', height: '3px' }} />
      </Box>
      
      <Box sx={{
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        p: 2,
        gap: 2,
      }}>
        <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <IconButton 
            onClick={handlePrev} 
            disabled={isPrevDisabled}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Box>

        <Box sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            transform: `translateX(-${currentIndex * (CARD_WIDTH_PERCENTAGE + GAP_PERCENTAGE / VISIBLE_CARDS)}%)`,
            transition: 'transform 0.5s ease-in-out',
            width: `100%`,
            gap: `${GAP_PERCENTAGE}%`,
          }}>
            {reviewsData.map((review, index) => (
              <Box 
                key={index} 
                sx={{ 
                  flex: `0 0 ${isSmallScreen ? CARD_WIDTH_PERCENTAGE + '%' : `calc(${CARD_WIDTH_PERCENTAGE}% - ${GAP_PERCENTAGE / VISIBLE_CARDS}%)`}`,
                  display: 'flex',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                }}
              >
                <ReviewCard 
                  name={review.name}
                  date={review.date}
                  stars={review.stars}
                  text={review.text}
                />
              </Box>
            ))}
          </Box>
        </Box>
        
        <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <IconButton 
            onClick={handleNext} 
            disabled={isNextDisabled}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
      
      <Box sx={{
        flex: '0 0 auto',
        width: '100%',
        textAlign: 'center',
        padding: 2,
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
          LASĂ O RECENZIE
        </Button>
      </Box>
    </Box>
  );
};

export default Section5;
