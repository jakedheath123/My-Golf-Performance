import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux"

import {  signInWithGoogle } from "../firebase"

const GoogleAuth = () => {
  const dispatch = useDispatch() 

  return (
    <Grid item >
      <Button variant="contained" color="secondary" fullWidth onClick={handleClick} startIcon={<i className="fab fa-google"></i>}>
        Sign In With Google
      </Button>
    </Grid>
  );

  function handleClick() {
    signInWithGoogle()  
    dispatch({type: "SIGN_IN_CLICKED", payload: true})
  }
};

export default GoogleAuth;