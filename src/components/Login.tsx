import React, { FunctionComponent, useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import { navigate } from "@reach/router"
import { useDispatch } from "react-redux"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link"
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";

import SignInAuth from "./SignInAuth"
import SignUpAuth from "./SignUpAuth"
import GoogleAuth from "./GoogleAuth"
import { auth } from "../firebase"

const Login: FunctionComponent<RouteComponentProps> = () => { 
  const [checked, setChecked] = useState(true)
  const [tester, setTester] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleClick = () => {
    setChecked(false)
  }

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => setCurrentUser(user))

    if (currentUser) {
      dispatch({type: "GET_USER_AUTHENTICATION", payload: currentUser})
      const timer = setTimeout(() => {
        navigate("/user-pages/golf-course-list")
        }, 1000)
  
        return () => clearTimeout(timer)
    }
 
    if (!checked) {
      const timer = setTimeout(() => {
      setTester(false)
      setChecked(true)
      }, 400)

      return () => clearTimeout(timer)
    }

    return unsubscribeFromAuth;  

  }, [currentUser, checked])
 
  return (
    <Container disableGutters={true} maxWidth={false} className={classes.root} data-test="component-login">
      <Grid container justify="center" direction="column" alignItems="center" spacing={2} className={classes.container}>
        <Fade in={checked} timeout={{exit: 400, enter: 400}}>
          <div className={classes.fadeWrapper}>
            {tester && 
            <>
            <SignInAuth />
            <Grid item>
          <Typography component="p" variant="subtitle1" className={classes.typography}>
            Or
          </Typography>
        </Grid>
            <GoogleAuth />
            <Grid item>
          <Link href="#" variant="body2" onClick={handleClick} >
             {"Don't have an account? Sign up"}
          </Link>
        </Grid>
            </>}
            {!tester && <SignUpAuth />}
        </div>
        </Fade>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  typography: {
    margin: "0.5em 0"
  },
  fadeWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    height: "100vh",
    position: "relative",
    background: "#ECE9E6"
  },
  container: {
    minHeight: "600px",
    maxWidth: "600px",
    margin: "0",
    backgroundColor: "white",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "50%",
    padding: "2em",
    border: "1px solid grey",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
  }
}));


export default Login;