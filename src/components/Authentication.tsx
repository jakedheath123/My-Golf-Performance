import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router"
import { useDispatch } from "react-redux"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { auth, signInWithGoogle } from "../firebase"

const Authentication = () => {
  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(null)
  const [userDetails, setUserDetails] = useState({
    email: null,
    password: null,
    confirmPassword: null
  })
  const [firebaseError, setFirebaseError] = useState("")
  const {email, password, confirmPassword} = userDetails;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => setCurrentUser(user))

    if (currentUser) {
      dispatch({type: "GET_USER_AUTHENTICATION", payload: currentUser})
      navigate("/golfcourseslist")
    }

    return unsubscribeFromAuth;
    
  }, [currentUser])
 
  const handleGoogleAuth = () => {
    signInWithGoogle()  
  }

  const handleLogIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      //Successful sign-in
    })
    .catch(error => setFirebaseError(error.message))
  }

  const handleChange = (e, label) => {
    setUserDetails({...userDetails,[label]: e.target.value})
  }

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      return setFirebaseError("Passwords do not match")
    }

    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    //Successful sign-in 
    const user = userCredential.user;
    setCurrentUser(user)
  })
  .catch((error) => {
    setFirebaseError(error.message)
  });
  }

  return (
    <>
    <p>{firebaseError}</p>
    <Grid item className="login__icon-buttons--spacing">
     <Button
        onClick={handleGoogleAuth} 
        className="login__icon-buttons"
        disableElevation
        variant="contained"
        color="secondary"
        startIcon={<i className="fab fa-google"></i>}
        >
       Sign in with Google
    </Button>
    </Grid>
    <Grid container spacing={1} alignItems="flex-end" justify="center" >
    <Grid item>
    <Typography variant="subtitle1">Or</Typography>
  </Grid>  
    </Grid>  
<Grid container spacing={1} alignItems="flex-end" justify="center" >
  <Grid item >
    <PersonIcon />
  </Grid>
  <Grid item>
    <TextField id="input-with-icon-grid" label="Email" onChange={(e) => handleChange(e,"email")}/>
  </Grid>
</Grid>
<Grid container spacing={1} alignItems="flex-end" justify="center" >
  <Grid item >
   <LockIcon />
  </Grid>
  <Grid item>
    <TextField id="input-with-icon-grid" label="Password" onChange={(e) => handleChange(e,"password")}/>
  </Grid>
</Grid>
<Grid container spacing={1} alignItems="flex-end" justify="center">
  <Grid item>
    <LockIcon />
  </Grid>
  <Grid item>
    <TextField id="input-with-icon-grid" label="Confirm Password" onChange={(e) => handleChange(e,"confirmPassword")}/>
  </Grid>
  <Grid container justify="center">
    <Grid item className="login__icon-buttons--spacing">
    <Button
    disableElevation
    size="medium"
variant="contained"
color="default"
endIcon={<ExitToAppIcon />}
onClick={handleSignUp}
>
Sign Up
</Button>
    </Grid>
    <Grid item className="login__icon-buttons--spacing">
    <Button
    disableElevation
    size="medium"
variant="contained"
color="default"
endIcon={<ExitToAppIcon />}
onClick={handleLogIn}
>
Log In
</Button>
    </Grid>
  </Grid>
</Grid>
</>
  );
};

export default Authentication;