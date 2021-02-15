import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router"
import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button';

import { signInWithGoogle, auth } from "../firebase"

const Authentication = () => {
  const [authLog, setAuthLog] = useState(null)
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.userAuthentication)
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => setAuthLog(user))
    //returns user object - uid, display name, email, metadata(last sign in time), 
    if (authLog) {
      dispatch({type: "GET_USER_AUTHENTICATION", payload: authLog})
      navigate("/golfcourseslist")
    }
  }, [auth, authLog])

  console.log(authLog)
 
  const handleClick = () => {
    signInWithGoogle()  
  }

  return (
     <Button
        onClick={handleClick} 
        className="login__icon-buttons"
        disableElevation
        variant="contained"
        color="secondary"
        startIcon={<i className="fab fa-google"></i>}
        >
       Sign in with Google
    </Button> 
  );
};

export default Authentication;