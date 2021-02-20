import React, { FunctionComponent } from "react"
import { RouteComponentProps } from "@reach/router"
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';

import Authentication from "./Authentication"
import golferMale from "../images/golfer-male"
import golferFemale from "../images/golfer-female"

const Login: FunctionComponent<RouteComponentProps> = () => { 
  return (
    <div className="login">
    <Container className="login-container" disableGutters={true} maxWidth={false}>
      <Paper className="login__form">
      <form >
      <Grid container justify="center">
      <Authentication />
      </Grid>  
        </form>
        <div className="tester">
      <img src={golferMale} alt="Golfer male" className="login-container_male-img"/>
      </div>
        </Paper>
      <div className="tester2">
      <img src={golferFemale} alt="Golfer female" className="login-container_female-img"/>
      </div>
    </Container>
    </div>
  );
};

export default Login;