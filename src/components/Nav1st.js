import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyLogo from '../img/envatologo.png';
import { Grid,Button, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  panel: {
    backgroundColor: '#262626',
    padding: theme.spacing(2),
    borderRadius:"none",
  },
  logo: {
    maxWidth: '200px', // Adjust as needed
    maxHeight: '100px', // Adjust as needed
  },
  button: {
    backgroundColor: '#7AA93C',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black', // Darker shade of green on hover
    },
  },
}));

const PanelExample = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.panel}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={6} md={6} >
          <img className={classes.logo} src={MyLogo} alt="Logo" />
        </Grid>
        <Grid item xs={6} md={6} container justify="flex-end">
          <Button variant="contained" className={classes.button}>
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PanelExample;
