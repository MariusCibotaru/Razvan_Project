import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

interface Service {
  title: string;
  link: string;
}

interface OverlayCardProps {
  image: string;
  title: string;
  services: Service[];
}

const OverlayCard: React.FC<OverlayCardProps> = ({ image, title, services }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); 

  const handleServiceClick = (link: string) => {
    navigate(link); 
  };

  return (
    <Box sx={{
      width: '300px',
      height: '350px',
      position: 'relative',
      borderRadius: 1,
      overflow: 'hidden',
      backgroundColor: '#282B31',
      boxShadow: 3,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <Box sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `
          radial-gradient(46.96% 46.96% at 50% 50%, 
          rgba(255, 255, 255, 0.62) 0%,   
          rgba(255, 255, 255, 0) 100%)  
        `,
        backgroundColor: '#282B31',
      }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            maxHeight: '80%',
            maxWidth: '80%',
            objectFit: 'contain',
          }}
        />
      </Box>

      <Box sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        textAlign: 'center',
      }}>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Список услуг */}
      {hovered && (
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          color: 'white',
          zIndex: 10,
          overflowY: 'auto',
          cursor: 'default',
        }}>
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  cursor: 'pointer', 
                }}
                onClick={() => handleServiceClick(service.link)}
              >
                {service.title}
              </Typography>
              {index < services.length - 1 && (
                <Divider sx={{ backgroundColor: 'white', width: '100%', marginBottom: '10px' }} />
              )}
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default OverlayCard;
