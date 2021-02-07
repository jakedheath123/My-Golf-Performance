import React from "react"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';


const Login = () => {

  return (
    <div className="root">
      <Paper className="container">
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

export default Login;