import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { navigate } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

import { signOut } from "../firebase" 

const NavBar: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.userAuthentication)

  const handleClick = () => {
    signOut()
    dispatch({type: "SIGN_IN_CLICKED", payload: false})
    dispatch({type: "CLEAR_USER"})
    navigate("/")
  }

  return (
    <div >
      <AppBar position="fixed" color="primary" className="navbar">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit" className={classes.account}>
            <AccountCircle />
          </IconButton>
          <Typography variant="subtitle1">
      Logged in as:
    </Typography>
    {user &&  <Typography variant="subtitle2">
      {user.email}
    </Typography>}
   
          <Button color="inherit" onClick={handleClick}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  account: {
    margin: '0 auto',
    position: 'absolute',
    zIndex: 1,
    top: 7,
    left: 0,
    right: 0,
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default NavBar;