import React, { FunctionComponent } from 'react';
import { useDispatch } from "react-redux";
import { navigate } from "@reach/router"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface IProps {
  id: string;
  name: string;
}

const ModalContent: FunctionComponent<IProps> = ({ id, name }) => {
   const classes = useStyles();
   const dispatch = useDispatch()

   const handleClick = () => {
     dispatch({ type: "SET_SELECTED_COURSE", payload: id})
     navigate(`/user-pages/course/${id}`)
   }

  return (
    <Grid container alignItems="center" justify="center" direction="column" className={classes.root} >
      <Grid item>
        <Typography>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          START ROUND
        </Typography>
      </Grid>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" >
              No
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Yes
            </Button>
          </Grid>
        </Grid>
    </Grid>
  );
};

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      maxWidth: "400px",
      height: "150px",
      borderRadius: ".28571429rem"
    }
  }
));

export default ModalContent;