import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { firestore } from "../firebase";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";

import RoundDataTable from "./RoundDataTable";

interface IProps extends RouteComponentProps {
  userId?: string;
}

const RoundSummary: FunctionComponent<IProps> = () => {
  const dispatch = useDispatch();
  const { newRoundHoleScores } = useSelector(state => state.userProfile);

  useEffect(() => {
    dispatch({ type: "COURSE_SELECTED", payload: false})
    postToFirebase()
  }, [])

  return (
   <Container disableGutters maxWidth={false} className="round-summary">
    <Grid container justify="center" direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Paper>
          <Typography variant="h1">
            Round Summary
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <Typography variant="h2">
            {`Total Score ${newRoundHoleScores?.totalScore && newRoundHoleScores.totalScore}`}
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Paper>
              <Typography>
                Eagles 0
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Typography>
                Birdies 0
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Typography>
                Pars 0
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Typography>
                Bogies 0
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Typography>
                Other 0
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item className="round-summary__table">
           <RoundDataTable />
        </Grid>
      </Grid>
    </Grid>
   
    </Container> 
  );
  
  function postToFirebase() {
    firestore.collection("userRoundScores").add(newRoundHoleScores);
  }
};

export default RoundSummary;