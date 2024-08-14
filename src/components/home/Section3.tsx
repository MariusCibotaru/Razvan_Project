import React, { useState } from 'react';
import { Box, Divider, Typography, Button, Grid } from '@mui/material';
import galleryData from '../../data/GalleryData';
import ImageModal from '../ImageModal/ImageModal';

const Section3 = () => {
  const [selectedGallery, setSelectedGallery] = useState<string | null>('Toate');
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  const handleGallerySelect = (title: string) => {
    setSelectedGallery(title);
  };

  const openImageDialog = (images: string[], initialIndex: number) => {
    setImages(images);
    setCurrentImageIndex(initialIndex);
    setIsDialogOpen(true);
  };

  const closeImageDialog = () => {
    setIsDialogOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const allImages = galleryData.flatMap(gallery => gallery.images);

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4%',
      width: '100%',
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
        <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold' }}>
          GALERIE
        </Typography>
        <Divider sx={{ flex: 1, backgroundColor: '#b0b0b0', height: '3px' }} />
      </Box>

      <Box sx={{
        flex: '1 1 auto',
        width: '100%',
        padding: '2%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
        }}>
          <Button
            variant={selectedGallery === 'Toate' ? "contained" : "outlined"}
            color="inherit"
            onClick={() => handleGallerySelect('Toate')}
            sx={{
              color: 'black',
              borderColor: 'black',
              '&.MuiButton-contained': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            Toate
          </Button>

          {galleryData.map((gallery, index) => (
            <Button
              key={gallery.title}
              variant={selectedGallery === gallery.title ? "contained" : "outlined"}
              color="inherit"
              onClick={() => handleGallerySelect(gallery.title)}
              sx={{
                color: 'black',
                borderColor: 'black',
                '&.MuiButton-contained': {
                  backgroundColor: 'black',
                  color: 'white',
                },
              }}
            >
              {gallery.title}
            </Button>
          ))}
        </Box>

        <Box sx={{
          flex: '1 1 auto',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 2,
          width: '100%',
        }}>
          {selectedGallery === 'Toate' ? (
            <Grid container spacing={2}>
              {allImages.map((image, imgIndex) => (
                <Grid item xs={12} sm={6} md={4} key={imgIndex}>
                  <Box
                    component="img"
                    src={image}
                    alt={`Image ${imgIndex + 1}`}
                    sx={{
                      width: '100%',
                      height: 350, 
                      objectFit: 'cover', 
                      borderRadius: 1,
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.025)', 
                      },
                    }}
                    onClick={() => openImageDialog(allImages, imgIndex)}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            galleryData
              .filter(gallery => gallery.title === selectedGallery)
              .map((gallery, index) => (
                <Grid container spacing={2} key={index}>
                  {gallery.images.map((image, imgIndex) => (
                    <Grid item xs={12} sm={6} md={4} key={imgIndex}>
                      <Box
                        component="img"
                        src={image}
                        alt={`Image ${imgIndex + 1}`}
                        sx={{
                          width: '100%',
                          height: 350, 
                          objectFit: 'cover',
                          borderRadius: 1,
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.025)', 
                          },
                        }}
                        onClick={() => openImageDialog(gallery.images, imgIndex)}
                      />
                    </Grid>
                  ))}
                </Grid>
              ))
          )}
        </Box>
      </Box>

      <ImageModal
        open={isDialogOpen}
        currentImage={images[currentImageIndex]}
        onClose={closeImageDialog}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </Box>
  );
};

export default Section3;
