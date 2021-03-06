import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import LockOutLinedIcon from "@material-ui/icons/LockOutLined"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

import { auth } from "../firebase"
import UserInputField from "./UserInputField"

const SignInAuth = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  })
  const [firebaseError, setFirebaseError] = useState({
    code: "",
    message: ""
  })

   return (
    <>
    <Grid item className="sign-in-auth">
          <Typography component="h1" variant="h6" align="center" color="secondary">
            {firebaseError.message}
          </Typography>
    </Grid>
    <Avatar className={classes.avatar}>
    <LockOutLinedIcon />
  </Avatar>
  <Grid item>
    <Typography component="h1" variant="subtitle1">
      Sign In
    </Typography>
  </Grid>
    <Grid item >
      <form>
      <UserInputField id="email" label="Email" name="email" onChange={handleChange} error={firebaseError.code === "auth/invalid-email" ? true: false}/>
      <UserInputField id="password" label="Password" name="password" onChange={handleChange} error={firebaseError.code === "auth/wrong-password" ? true: false}/>
         <Button
         type="submit"
         fullWidth
         variant="contained"
         color="primary"
         onClick={handleClick}
         >
           Sign In
         </Button>
      </form>
    </Grid>
    </>
  );

  function handleChange(e, name) {
    setUserLogin({...userLogin, [name]: e.target.value})
  }

  function handleClick(e) {
    e.preventDefault()
    const {email, password} = userLogin;
    dispatch({type: "SIGN_IN_CLICKED", payload: true})
    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      //Successful sign-in
    })
    .catch(({ code, message }) => {
      setFirebaseError({code, message})
    })
  }
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#f50057"
  }
}));

export default SignInAuth;