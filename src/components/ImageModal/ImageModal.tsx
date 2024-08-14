import React from 'react';
import { Box, IconButton, Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface ImageModalProps {
  open: boolean;
  currentImage: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ open, currentImage, onClose, onPrev, onNext }) => {
  return (
    <>
        <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
            style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: '70vh',
            maxWidth: 'none',
            maxHeight: 'none',
            position: 'relative',
            background: 'transparent',
            boxShadow: 'none',
            border: 'none', 
            },
        }}
        >
        <DialogContent
            sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            background: 'transparent', 
            }}
        >
            <Box
            component="img"
            src={currentImage}
            alt="Fullsize image"
            sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
            }}
            />
        </DialogContent>
        </Dialog>

        {open && (
        <>
            <Box sx={{
                position: 'fixed',
                top: 16,
                right: 16,
                zIndex: 1400, 
            }}>
                <IconButton
                    onClick={onClose}
                    sx={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        },
                        borderRadius: 0,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{
                position: 'fixed',
                top: '50%',
                left: 16,
                transform: 'translateY(-50%)',
                zIndex: 1400, 
            }}>
                <IconButton
                    onClick={onPrev}
                    sx={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        },
                        borderRadius: 0,
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </Box>
            <Box sx={{
                position: 'fixed',
                top: '50%',
                right: 16,
                transform: 'translateY(-50%)',
                zIndex: 1400, 
            }}>
                <IconButton
                    onClick={onNext}
                    sx={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        },
                        borderRadius: 0,
                    }}
                >
                <ChevronRightIcon />
                </IconButton>
            </Box>
        </>
      )}
    </>
  );
};

export default ImageModal;
