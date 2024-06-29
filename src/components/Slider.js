import React from 'react';
import { Typography, Grid, IconButton, Card, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Tabman from '../img/Samsung_TabS7.webp';
import Standimg from '../img/stand man.jpg';
import Girl from '../img/girl.jpg';

const NewsAndBlogsComponent = () => {
  // Sample data for the slider cards
  const sliderData = [
    {
      id: 1,
      image: Tabman,
      text: "How to make your competitive advantage.",
    },
    {
      id: 2,
      image: null,
      text: '"” How to help your team excel at remote collaboration. Here are tips and tools we use on the content team at InVision to keep our remote collaboration game strong. Trust is both a complex and nuanced topic. Its very nature makes it difficult to tackle through direct effort. “"',
    },
    {
      id: 3,
      image: Standimg,
      text: "Remote Workers, here's how to dodge distraction.",
    },
    {
      id: 4,
      image: "",
      text: '” 4 salary negotiation mistakes you’ve probably made. Four years ago, I was making $25 per hour as a freelance digital designer building ecommerce sites. I had no idea how to increase my hourly rate, even if Id wanted to. “',
    },
    {
      id: 5,
      image: Girl,
      text: 'Steal these ideas to stay happy and productive.',
    },
  ];

  // State for managing slider position
  const [sliderIndex, setSliderIndex] = React.useState(0);

  // Function to handle sliding left
  const slideLeft = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    }
  };

  // Function to handle sliding right
  const slideRight = () => {
    if (sliderIndex < sliderData.length - 1) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  // Calculate the number of cards to display based on screen size
  const cardsToShow = window.innerWidth < 600 ? 1 : 3;

  return (
    <div style={{ position: 'relative', textAlign: 'center', marginTop: '100px', marginBottom: '80px' }}>
      <Typography
        style={{
          backgroundColor: '#EBF2FF',
          width: '95px',
          textAlign: 'center',
          marginLeft: '47%',
          padding: '8px 0',
          color: '#00C9A7',
          fontSize: '12px',
          borderRadius: '20px',
          position: 'relative',
          zIndex: '1',
        }}
        variant="h4"
        component="h2"
      >
        News & Blogs
      </Typography>
      <Typography variant="h5" component="h3" style={{ marginTop: '20px' }}>
        Read our latest news
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        Our duty towards you is to share our experience we’re reaching in our work path with you.
      </Typography>

      {/* Left and Right Arrows */}
      <IconButton style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }} onClick={slideLeft}>
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} onClick={slideRight}>
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Slider for news cards */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {sliderData.slice(sliderIndex, sliderIndex + cardsToShow).map((item) => (
              <Grid item xs={4} key={item.id}>
                <Card style={{ height: '500px', position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      backgroundColor: item.image ? 'transparent' : '#fff', // Different background color for text-only cards
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt="Content"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                        }}
                      />
                    ) : null}
                    <Box
                      sx={{
                        position: 'relative',
                        color: item.image ? '#fff' : '#000',
                        backgroundColor: item.image ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                        padding: '10px',
                        borderRadius: '10px',
                      }}
                    >
                      <Typography
                        variant="body1"
                        style={(item.id === 2 || item.id === 4) ? { fontSize: '20px' } : {}}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewsAndBlogsComponent;