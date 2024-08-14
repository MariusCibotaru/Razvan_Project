import React from 'react';
import { Box, Typography } from '@mui/material';

interface WorkingStagesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Иконка передается как React-элемент
}

const WorkingStagesCard: React.FC<WorkingStagesCardProps> = ({ title, description, icon }) => {
  return (
    <Box 
      sx={{
        width: '300px',
        padding: '16px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <Box sx={{ marginBottom: '16px' }}>
        {icon} {/* Отображаем иконку */}
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ color: '#666',  marginTop: 'auto' }}>
        {description}
      </Typography>
    </Box>
  );
};

export default WorkingStagesCard;
