import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import launchImage from '../img/img1.jpg';

const RootContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  marginTop:'50px'
//   backgroundColor: '#f5f5f5', // Use a hex value or any valid CSS color value
});

const LaunchImage = styled('img')({
  width: '100%',
  maxWidth: 600,
  marginBottom: '32px', // 4 * 8px
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Example box shadow
});

const Launch = () => {
  return (
    <RootContainer>
      <Box>
        <LaunchImage src={launchImage} alt="Launch" />
      </Box>
      <Typography style={{width:"350px",color:'#91839D'}} component="h1" gutterBottom>
        We are launching soon. Join the priority list for information and early access.
      </Typography>
    </RootContainer>
  );
};

export default Launch;
