import React, {FunctionComponent} from 'react';
import { navigate } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

const NavBar: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit" className={classes.account}>
            <AccountCircle />
          </IconButton>
          <Button color="inherit" onClick={() => navigate("/")}>Logout</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
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
  appBar: {
    top: 'auto',
    bottom: 0,
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