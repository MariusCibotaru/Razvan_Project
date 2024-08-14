import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import About from '../../images/About/about.png';

const data = [
  {
    title: 'PRODUCEM SI INSTALAM MONUMENTE FUNERARE IN MOLDOVA.',
    text: 'Comanda acum monumente funerare din granit Chisinau, direct de la producator, la un pret accesibil cu o calitate la cel mai inalt nivel. Te ajutam sa faci o decizie corecta in alegerea de culori care le va avea monumente din granit, cum ar fi negru, rosu si gri cu elemente de decor la alegerea Dvs. Efectuam instalarea la monumente funerare Moldova in tot teritoriul Moldovei. Instalarea monumente din granit se face calitativ de specialisti cu experienta mare in domeniu instalarii monunumentelor funerare incepand cu cel mai simplu model de monument funerar pana la instalarea de cavouri si memoriale.'
  },
  {
    title: 'DETINEM TRANSPORT PROPRIU SI ECHIPA DE SPECIALISTI IN INSTALAREA MONUMENTELOR',
    text: 'Creeem memorie prin amenajarea locului de veci a persoanelor, familiilor si prietinilor prin monumente din granit numai cu poze calitative, cuvinte calde in adresa si memoria celor dragi. Prestam servicii de transport si livrare monumente funerare din granit Chisinau si in toata tara cu instalare profesionala si lasam in curatenie locul dupa lucrari. Cind comanzi monumente funerare poti sa asortezi si o vaza din granit, pentru a depune flori la mormint, si o candela pentru a fi aprinsa flacara memoriei celor dragi care nu mai sunt printre noi. Oferim curatirea si intretinerea mormintelor cu colectarea si evacuarea gunoiului, indepartarea buruienilor din cimitir uscate, udare de flori. In memoria celor dragi, te ajutam in a mentine curatenia locurilor de veci ale familiei si prietenilor.'
  }
];

const Section4 = () => {
  return (
    <Box sx={{
      minHeight: '90vh',
      backgroundColor: '#e0e0e0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
          DESPRE NOI
        </Typography>
        <Divider sx={{ flex: 1, backgroundColor: '#b0b0b0', height: '3px' }} />
      </Box>

      <Box sx={{
        flex: '1 1 auto',
        width: '100%',
        display: 'grid',
        padding: '2%',
        gap: 2,
        gridTemplateColumns: {
          xs: '1fr',       
          md: '3fr 1.5fr', 
        },
      }}>
        {/* Левый бокс с данными */}
        <Box sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: 2,
        }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ width: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {item.text}
              </Typography>
              <Divider sx={{ backgroundColor: '#b0b0b0', height: '2px' }} />
            </Box>
          ))}
        </Box>

        {/* Правый бокс с фото как фоном */}
        <Box sx={{
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${About})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '350px',
          height: '100%',
          maxWidth: '100%', 
          maxHeight: '100%', 
        }}>
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
