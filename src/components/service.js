// import React from 'react';
// import { Box, Typography, Grid, Container } from '@mui/material';
// import Paint from '../img/unnamed-removebg-preview.png';
// import Targetpic from '../img/target.png';
// import Power from '../img/pngtree-vector-strategy-icon-png-image_695886-removebg-preview.png';

// const ServiceSection = () => {
//   return (
//     <Container>
//       <Box style={{marginTop:'170px',backgroundColor:'none'}} textAlign="center" my={4}>
//         <Typography style={{backgroundColor:'#EBF2FF',width:'160px',padding:'8px 0', margin:'auto',color:'#00C9A7',fontSize:'20px',borderRadius:"20px"}} variant="h4" component="h2">
//           What we do?
//         </Typography>
//         <Typography variant="h5" component="h3" pt={3} style={{width:'440px',margin:'auto',fontSize:'30px'}}>
//           Front makes designing easy and performance fast
//         </Typography>
//       </Box>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} sm={4}>
//           <Box
//             bgcolor="primary.main"
//             color="primary.contrastText"
//             p={3}
//             textAlign="center"
//             borderRadius={2}
//           >
//             <img src={Paint} alt="Design" style={{ width: '100px', borderRadius: '50%' }} />
//             <Typography variant="h6" component="h4" mt={2}>
//               Professional Design
//             </Typography>
//             <Typography mt={1}>
//               Achieve virtually any design and layout from within the one template.
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Box
//             bgcolor="primary.main"
//             color="primary.contrastText"
//             p={3}
//             textAlign="center"
//             borderRadius={2}
//           >
//             <img src={Targetpic} alt="Performance" style={{ width: '100px', borderRadius: '50%' }} />
//             <Typography variant="h6" component="h4" mt={2}>
//               Front strategy
//             </Typography>
//             <Typography mt={1}>
//             We strive to figure out ways to help your business grow through all platforms.
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Box
//             bgcolor="primary.main"
//             color="primary.contrastText"
//             p={3}
//             textAlign="center"
//             borderRadius={2}
//           >
//          <img src={Power} alt="Performance" style={{ width: '100px', borderRadius: '50%' }} />
//             <Typography variant="h6" component="h4" mt={2}>
//               Unlimited Power
//             </Typography>
//             <Typography mt={1}>
//             Find what you need in one template and combine features at will.
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ServiceSection;













import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Paint from '../img/unnamed-removebg-preview.png';
import Targetpic from '../img/target.png';
import Power from '../img/pngtree-vector-strategy-icon-png-image_695886-removebg-preview.png';
import Arrow from '../img/arroq3.png';

const ServiceSection = () => {
  return (
    <Container>
      <Box style={{ marginTop: '170px' }} textAlign="center" my={4}>
        <Typography style={{ backgroundColor: '#EBF2FF', width: '160px', padding: '8px 0', margin: 'auto', color: '#00C9A7', fontSize: '20px', borderRadius: "20px" }} variant="h4" component="h2">
          What we do?
        </Typography>
        <Typography variant="h5" component="h3" pt={3} style={{ width: '440px', margin: 'auto', fontSize: '30px', color: 'black' }}>
          Front makes designing easy and performance fast
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box
            color="black"
            p={3}
            textAlign="center"
            borderRadius={2}
          >
            <img src={Paint} alt="Design" style={{ width: '100px', borderRadius: '50%' }} />
            <Typography variant="h6" component="h4" mt={2} color="black">
             <h3> Professional Design </h3>
            </Typography>
            <Typography mt={1} color="black">
              Achieve virtually any design and layout from within the one template.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            color="black"
            p={3}
            textAlign="center"
            borderRadius={2}
          >
            <img src={Targetpic} alt="Performance" style={{ width: '100px', borderRadius: '50%' }} />
            <Typography variant="h6" component="h4" mt={2} color="black">
            <h3>  Front strategy </h3>
            </Typography>
            <Typography mt={1} color="black">
              We strive to figure out ways to help your business grow through all platforms.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            color="black"
            p={3}
            textAlign="center"
            borderRadius={2}
          >
            <img src={Power} alt="Performance" style={{ width: '100px', borderRadius: '50%' }} />
            <Typography variant="h6" component="h4" mt={2} color="black">
           <h3> Unlimited Power</h3>
            </Typography>
            <Typography mt={1} color="black">
              Find what you need in one template and combine features at will.
            </Typography>
          </Box>
        </Grid>
        <Box style={{marginTop:'10px'}}>
            <img style={{width:'250px',marginLeft:'80px'}} src={Arrow} alt='3 arrow'></img>
            <Typography style={{width:'400px', textAlign:'center' ,fontSize:'20px'}}  >
              It is fast and easy. Create your first and ongoing website with Front.
            </Typography>
        </Box>
      </Grid>
    </Container>
  );
};

export default ServiceSection;
