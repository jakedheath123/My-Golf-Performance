import React, { FunctionComponent } from "react"
import { RouteComponentProps } from "@reach/router"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';

const Login: FunctionComponent<RouteComponentProps> = () => { 
  return (
    <div className="login" data-test="component-login">
      <Paper className="login__form">
      <form >
      <Grid container justify="center">
          <Grid item className="login__icon-buttons--spacing">
        <Button 
        className="login__icon-buttons"
        disableElevation
        variant="contained"
        color="secondary"
        startIcon={<i className="fab fa-google"></i>}
        >
       Sign in with Google
      </Button>
      </Grid>  
      </Grid>
      <Grid container justify="center">
          <Grid item className="login__icon-buttons--spacing">
        <Button 
        className="login__icon-buttons"
        disableElevation
        startIcon={<FacebookIcon />}
        variant="contained"
        color="primary">
      Sign in with Facebook
      </Button>
      </Grid>  
      </Grid>
      <Grid container justify="center">
            <Grid item>
            <Typography variant="subtitle1">Or</Typography>
          </Grid>
      </Grid>      
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
          <Grid container justify="center">
            <Grid item className="login__icon-buttons--spacing">
            <Button
            disableElevation
            size="medium"
        variant="contained"
        color="default"
        endIcon={<ExitToAppIcon />}
      >
        Login
      </Button>
            </Grid>
          </Grid>
        </Grid>
        </form>
        </Paper>
    </div>
  );
};

export default Login;