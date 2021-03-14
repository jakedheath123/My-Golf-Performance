import React, { FunctionComponent, useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import Link from "@material-ui/core/Link"
import LockOutLinedIcon from "@material-ui/icons/LockOutLined"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

import { auth } from "../firebase"
import UserInputField from "./UserInputField"

const SignUpAuth = () => {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [firebaseError, setFirebaseError] = useState("")
  const dispatch = useDispatch()

  const handleClick = () => {
     dispatch({ type: "SIGN_UP_LINK_CLICKED" })
  }

  return (
    <>
     <Grid item className="sign-up-auth">
          <Typography component="h1" variant="h6" align="center" color="secondary">
            {firebaseError}
          </Typography>
        </Grid>
    <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Grid item>
          <Typography component="h1" variant="subtitle1">
            Sign Up
          </Typography>
        </Grid>
    <Grid item xs={10}>
      <form>
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item xs={6}>
            <UserInputField id="firstName" label="First Name" name="firstName" onChange={handleChange}/>
          </Grid>
          <Grid item xs={6}>
            <UserInputField id="lastName" label="Last Name" name="lastName" onChange={handleChange}/>
          </Grid>
        </Grid>
        <UserInputField id="email" label="Email" name="email" onChange={handleChange}/>
        <UserInputField id="password" label="Password" name="password" onChange={handleChange}/>
        <UserInputField id="confirmPassword" label="Confirm Password" name="confirmPassword" onChange={handleChange}/>
        <Button
         type="submit"
         fullWidth
         variant="contained"
         color="primary"
         onClick={handleSignUp}
         >
           Sign Up
         </Button>
      </form>
    </Grid>
    <Grid item>
          <Link href="#" variant="body2" onClick={handleClick}>
             Already have an account? Sign in
          </Link>
        </Grid>
    </>
  );

  function handleChange(e, name) {
    setUserDetails({...userDetails, [name]: e.target.value})
  }

  function handleSignUp(e) {
    e.preventDefault()
    const { password, confirmPassword, email } = userDetails;
  
    if (password !== confirmPassword) {
      return setFirebaseError("Passwords do not match")
    }
  
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    //Successful sign-in 
  })
  .catch((error) => {
    setFirebaseError(error.message)
  });
  }
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#f50057"
  }
}));

export default SignUpAuth;