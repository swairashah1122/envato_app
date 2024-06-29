// import React from 'react';
// import { Container, Grid, Typography, Button, Divider } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import AppStore from '../img/appstore.png';
// import Playbtn from '../img/playstore1.png';


// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: '#f8f9fa',
//     padding: theme.spacing(4, 0),
//   },
//   column: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: theme.spacing(2),
//   },
//   heading: {
//     marginBottom: theme.spacing(1),
//     fontWeight: 'bold',
//     width: '365px',
//   },
//   button: {
//     margin: theme.spacing(1, 0),
//   },
//   bottomText: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: theme.spacing(3),
//   }
// }));

// const Footer = () => {
//   const classes = useStyles();
//   const isMobile = window.innerWidth <= 600;

//   return (
//     <footer className={classes.footer}>
//       <Container>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6} md={3}>
//             <div className={classes.column}>
//               <Typography variant="h6" className={classes.heading}>About</Typography>
//               <Typography>About</Typography>
//               <Typography>Services</Typography>
//               <Typography>Career</Typography>
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <div className={classes.column}>
//               <Typography variant="h6" className={classes.heading}>Account</Typography>
//               <Typography>Account</Typography>
//               <Typography>My Tasks</Typography>
//               <Typography>Projects</Typography>
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <div className={classes.column}>
//               <Typography variant="h6" className={classes.heading}>Resources</Typography>
//               <Typography>Help</Typography>
//               <Typography>Terms</Typography>
//               <Typography>Privacy</Typography>
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <div className={classes.column}>
//               <Typography variant="h6" className={classes.heading}>We are driven to deliver results for all your businesses.</Typography>
//                <img style={{width:'120px'}} src={AppStore} alt='App Store'></img>
//                <img style={{width:'130px'}} src={Playbtn} alt='googleplay'></img>
//               {/* <Button variant="contained" color="primary" className={classes.button}>Play Store</Button>
//               <Button variant="contained" color="secondary" className={classes.button}>App Store</Button> */}
//             </div>
//           </Grid>
//         </Grid>
//         <Divider />
//         <div className={classes.bottomText}>
//           <Typography variant="h6" style={{ marginRight: 'auto', fontSize: isMobile ? '24px' : '40px', color: '#377DFF' }}>
//             Front
//           </Typography>
//           <Typography>&copy; Front. 2019 Htmlstream. All rights reserved.</Typography>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;




















import React from 'react';
import { Container, Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppStore from '../img/appstore.png'; // اپنے app store image کا path دیں
import Playbtn from '../img/playstore1.png'; // اپنے play store image کا path دیں

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#f8f9fa',
    padding: theme.spacing(4, 0),
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  bottomText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  }
}));

const Footer = () => {
  const classes = useStyles();
  const isMobile = window.innerWidth <= 600;

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.column}>
              <Typography variant="h6" className={classes.heading}>About</Typography>
              <Typography>About</Typography>
              <Typography>Services</Typography>
              <Typography>Career</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.column}>
              <Typography variant="h6" className={classes.heading}>Account</Typography>
              <Typography>Account</Typography>
              <Typography>My Tasks</Typography>
              <Typography>Projects</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.column}>
              <Typography variant="h6" className={classes.heading}>Resources</Typography>
              <Typography>Help</Typography>
              <Typography>Terms</Typography>
              <Typography>Privacy</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.column}>
              <Typography variant="h6" className={classes.heading}>We are driven to deliver results for all your businesses.</Typography>
              <div className={classes.buttonContainer}>
                <img style={{width: '120px', marginRight: '10px'}} src={AppStore} alt='App Store' />
                <img style={{width: '130px'}} src={Playbtn} alt='Google Play' />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <div className={classes.bottomText}>
              <Typography variant="h6" style={{fontWeight:'bold', fontSize: isMobile ? '24px' : '40px', color: '#377DFF' }}>
                Front
              </Typography>
              <Typography>&copy; Front. 2019 Htmlstream. All rights reserved.</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
