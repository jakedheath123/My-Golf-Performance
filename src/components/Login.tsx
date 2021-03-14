import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";

import SignInAuth from "./SignInAuth";
import SignUpAuth from "./SignUpAuth";
import GoogleAuth from "./GoogleAuth";
import { auth } from "../firebase";

const Login: FunctionComponent<RouteComponentProps> = () => { 
  const [currentUser, setCurrentUser] = useState(null)
  const [toggleContent, setToggleContent] = useState(true)
  const dispatch = useDispatch()
  const { signUpLinkClicked } = useSelector(state => state.userInterface);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => setCurrentUser(user))
    
    if (currentUser) {
      dispatch({type: "GET_USER_AUTHENTICATION", payload: currentUser})
      const timer = setTimeout(() => {
        navigate("/user-pages/golf-course-list")
        }, 1000)
  
        return () => clearTimeout(timer)
    }
 
    if (!signUpLinkClicked) {
      const timer = setTimeout(() => {
      setToggleContent(current => !current)
       dispatch({ type: "SIGN_UP_LINK_CLICKED" })
      }, 400)

      return () => clearTimeout(timer)
    }

    return unsubscribeFromAuth;  

  }, [currentUser, signUpLinkClicked])
 
  return (
    <Container component="main" disableGutters={true} maxWidth={false} className="login" data-test="component-login">
      <Grid container justify="center" direction="column" alignItems="center" spacing={2} className="login__container">
        <Fade in={signUpLinkClicked} timeout={{exit: 400, enter: 400}}>
          <div className="login__container__fade-wrapper">
            {toggleContent ? 
            <>
            <SignInAuth />
            <Grid item>
          <Typography component="h1" variant="subtitle1" >
            Or
          </Typography>
        </Grid>
            <GoogleAuth />
            <Grid item>
          <Link href="#" variant="body2" onClick={handleClick} >
             {"Don't have an account? Sign up"}
          </Link>
        </Grid>
            </> : <SignUpAuth />}
        </div>
        </Fade>
      </Grid>
    </Container>
  );

  function handleClick() {    
    dispatch({ type: "SIGN_UP_LINK_CLICKED" })
  }
};

export default Login;