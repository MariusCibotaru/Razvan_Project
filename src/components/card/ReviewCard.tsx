import React from 'react';
import { Box, Typography, Paper, Rating, Avatar } from '@mui/material';

// Функция для генерации цвета на основе имени
const stringToColor = (string: string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

interface ReviewCardProps {
  name: string;
  date: string;
  stars: number;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, date, stars, text }) => {
  return (
    <Paper elevation={0} sx={{ padding: '4%', width: '100%', display: 'flex', alignItems: 'flex-start', borderRadius: '16px' }}>
      <Avatar 
        sx={{ 
          bgcolor: stringToColor(name), 
          marginRight: 2, 
          width: 75, 
          height: 75 
        }}
      >
        {name.charAt(0)}
      </Avatar>
      <Box sx={{ 
          flex: 1, 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
      }}>
          <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              marginBottom: 1, 
              justifyContent: 'center', 
              alignItems: 'flex-start'
          }}>
              <Rating value={stars} readOnly />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>{name}</Typography>
              <Typography variant="body2" color="textSecondary">{date}</Typography>
          </Box>
          <Typography variant="body1" sx={{ marginTop: 1 }}>{text}</Typography>
      </Box>
    </Paper>
  );
};

export default ReviewCard;
