import React from 'react';
import { makeStyles, useMediaQuery, Container, Typography, Button, Grid, Box } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Typewriter from '../components/Typwriter'; // Adjust path as needed
import MyImg from '../img/img2.jpg';

const phrases = [
  'perfect in every way',
  'astonishing',
  'more professional'
];

const useStyles = makeStyles((theme) => ({
  heroSection: {
    padding: theme.spacing(4),
    alignItems: 'center',
  },
  imageContainer: {
    textAlign: 'center',
    position: 'relative',
    
  },
  image: {
    maxWidth: '100%',
    height: '400px',
    // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)', // Custom shape
    position: 'relative',
    zIndex: 2,
  },
  randomShapeContainer: {
    position: 'absolute',
    marginTop:'100px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
}));

const RandomShape = styled(Box)({
  width: 600,
  height: 600,
  backgroundColor: '#F5F8FF',
  borderRadius: '150% 259% 100% 400%',
});

const HeroSection = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery('(max-width:960px)'); // Adjust breakpoint as needed

  return (
    <Container>
      <Grid container className={classes.heroSection}>
        <Grid item xs={12} md={6}>
          <Typography style={{ fontSize: '70px', width: '20px' }} variant="h4" gutterBottom>
            Introducing Front
          </Typography>
          <Typography variant="body1" gutterBottom style={{ color: '#77839D' }}>
            your company will look{' '}
            <Typewriter texts={phrases} typingSpeed={100} color="blue" />
          </Typography>
          <Typography style={{ color: '#77839D', width: '370px' }}>
            Attract more visitors, and win more business with Front template.
          </Typography>
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
            <Button variant="contained" color="primary" size="large" style={{ backgroundColor: '#EBF2FF', color: '#377DFF', padding: '15px 30px', fontWeight: "bold", boxShadow: 'none' }}>
              Get Started
            </Button>
            <Typography
      style={{
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'center',
        width: '3.75rem',
        marginLeft:'2rem',
        height: '3.75rem',
        fontSize: '.8125rem',
        borderRadius: '50%',
        color: '#00c9a7',
        backgroundColor: 'rgba(0, 201, 167, 0.1)',
        transition: 'all .3s ease-in-out',
      }}
    >
      {/* Play button shape using ::before pseudo-element */}
      <Typography
        variant="body1"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          marginLeft: '.125rem',
          color: '#00c9a7',
        }}
      >
        {/* Content inside the nested Typography */}
      </Typography>
      {/* Play button shape */}
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderBottom: '12px solid #00c9a7',
          zIndex: 1,
        }}
      />
    </Typography>
            <Typography variant="body1" style={{ marginLeft: '2rem', fontSize: "20px" }}>
              Play Video
            </Typography>
          </div>
        </Grid>
        {!isSmallScreen && (
          <Grid item xs={12} md={6} className={classes.imageContainer}>
            <Box className={classes.randomShapeContainer}>
              <RandomShape />
            </Box>
            <img
              src={MyImg}
              alt="Your Company"
              className={classes.image}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default HeroSection;
