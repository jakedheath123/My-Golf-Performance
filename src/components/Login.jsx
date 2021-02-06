import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';


const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container spacing={1} alignItems="flex-end" justify="center" >
          <Grid item >
            <PersonIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Username" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end" justify="center">
          <Grid item>
            <LockIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Password" />
          </Grid>
        </Grid>
        </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    transition: theme.transitions.create('transform')
  },
  paper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    minWidth: 300,
    padding: "2em",
    transform: 'translate(-50%,-50%)',
    transition: theme.transitions.create('transform'),
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
  }
}));

export default Login;