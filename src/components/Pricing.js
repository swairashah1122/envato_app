import React, { useState } from 'react';
import { Container, Typography, Button, ButtonGroup, Box, Card, CardContent, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Pricing = () => {
  const [plan, setPlan] = useState('Monthly');

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Left side Pricing Plan section */}
        <Grid item xs={12} md={6}>
          <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="flex-start" 
            mt={5} // Adjusted margin top to 10 from 25
          >
            <Typography 
              style={{ 
                backgroundColor: '#EBF2FF', 
                width: '95px', 
                textAlign: 'center',
                padding: '8px 0', 
                color: '#00C9A7', 
                fontSize: '12px', 
                borderRadius: '20px',
                position: 'relative',
                zIndex: '1' // Ensure above ButtonGroup
              }} 
              variant="h4" 
              component="h2"
            >
              Pricing Plan
            </Typography>
            
            <Box mt={2}>
              <Typography style={{ width: '260px', letterSpacing: '1px' }} variant="h5" mt={1}>
                No additional costs. Pay for what you use.
              </Typography>
              <Typography style={{ width: '350px' }} variant="body1" color="textSecondary" mt={1}>
                Choose the most suitable service for your needs with a reasonable price.
              </Typography>
            </Box>
  
            <Box mt={3}>
              <ButtonGroup>
                <Button 
                  variant="contained" 
                  style={{
                    backgroundColor: plan === 'Monthly' ? '#1976d2' : '#ffffff',
                    color: plan === 'Monthly' ? '#ffffff' : '#000000',
                    width: '138px',
                    height: '50px'
                  }}
                  onClick={() => setPlan('Monthly')}
                >
                  Monthly
                </Button>
                <Button 
                  variant="contained" 
                  style={{
                    backgroundColor: plan === 'Yearly' ? '#1976d2' : '#ffffff',
                    color: plan === 'Yearly' ? '#ffffff' : '#000000',
                    width: '150px',
                    height: '50px'
                  }}
                  onClick={() => setPlan('Yearly')}
                >
                  Yearly
                </Button>
              </ButtonGroup>
            </Box>
  
            <Typography 
              style={{ 
                backgroundColor: '#00C9A7', 
                width: '70px', 
                textAlign: 'center',
                padding: '8px 0', 
                color: 'white', 
                fontSize: '12px', 
                borderRadius: '20px',
                position: 'relative',
                zIndex: '1', // Ensure above ButtonGroup
                marginLeft: '245px', // Adjust as needed for positioning
                marginTop: '-66px', // Adjust as needed for positioning
              }} 
              variant="h4" 
              component="h2"
            >
              10% OFF
            </Typography>
          </Box>
        </Grid>
  
        {/* Right side Cards */}
        <Grid item xs={12} md={6} container spacing={3} mt={5}>
          {/* First Individual Plan Card */}
          <Grid item xs={12} sm={6}>
            <Card style={{ backgroundColor: '#ffffff', color: '#1976d2', padding: '20px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', height: '100%' }}>
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  Individual Plan
                </Typography>
                <Typography variant="h4" style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', marginBottom: '30px' }}>$</span> <span style={{ fontWeight: 'bold', fontSize: '37px', marginLeft: '6px' }}>22</span> <span style={{ fontSize: '22px' }}>/month</span>
                </Typography>
                <Box mt={2} style={{ textAlign: 'center' }}>
                  <Typography variant="body1" style={{ display: 'flex', textAlign: 'left', marginBottom: '15px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> Community support
                  </Typography>
                  <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> 400+ pages
                  </Typography>
                  <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> 100+ header variations
                  </Typography>
                  <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> 30+ home page options
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Button style={{ boxShadow: 'none', width: '220px', fontSize: '15px', fontWeight: '600', backgroundColor: "#EBF2FF", color: '#377DFF' }} variant="contained" >
                    Get Started
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
  
          {/* Placeholder for another card */}
          <Grid item xs={12} sm={6}>
            <Card style={{ backgroundColor: '#ffffff', color: '#1976d2', padding: '20px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', }}>
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  Enterprise Plan
                </Typography>
                <Typography variant="h4" style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', marginBottom: '30px' }}>$</span> <span style={{ fontWeight: 'bold', fontSize: '37px', marginLeft: '6px' }}>99</span> <span style={{ fontSize: '22px' }}>/month</span>
                </Typography>
                <Box mt={2} style={{ textAlign: 'center' }}>
                  <Typography variant="body1" style={{ display: 'flex', textAlign: 'left', marginBottom: '15px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> 24/7 support
                  </Typography>
                  <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> 400+ pages
                  </Typography>
                  <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> 200+ header variations
                  </Typography>
                  <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> 40+ home page options
                  </Typography>
                  <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: '#80858F' }}>
                    <CheckCircleOutlineIcon style={{ color: '#00C9A7', marginRight: '5px' }} /> E-commerce
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Button style={{ boxShadow: 'none', width: '220px', fontSize: '15px', fontWeight: '600', backgroundColor: "#EBF2FF", color: '#377DFF' }} variant="contained" >
                    Get Started
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pricing;
