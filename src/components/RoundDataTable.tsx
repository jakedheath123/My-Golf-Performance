import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const RoundDataTable = () => {
  const classes = useStyles();
  const { selectedCourse: { scoreCard, coursePar }} = useSelector(state => state.golfCourses);
  const { newRoundHoleScores: { holes, totalScore } } = useSelector(state => state.userProfile);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hole</TableCell>
            {scoreCard.map(column => (
              <TableCell key={column.hole}>{column.hole}</TableCell>
            ))}
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Par
              </TableCell>
              {scoreCard.map(hole => (
                <TableCell key={hole.hole}>{hole.par}</TableCell>
              ))}
              <TableCell>{coursePar}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Score
              </TableCell>
              {holes.map(hole => (
                <TableCell key={hole.hole}>{hole.score}</TableCell>
              ))}
              <TableCell>{totalScore}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RoundDataTable;