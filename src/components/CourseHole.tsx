import React, { FunctionComponent, useEffect, useState, MouseEvent } from 'react';
import { RouteComponentProps } from "@reach/router";
import { useSelector, useDispatch } from "react-redux"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { navigate } from "@reach/router"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface IProps extends RouteComponentProps {
  courseId?: string;
  hole?: number
}

const CourseHole: FunctionComponent<IProps> = () => {
  const dispatch = useDispatch();
  const { selectedCourse: { id, scoreCard } } = useSelector(state => state.golfCourses);
  const [shots, setShots] = useState(0);
  const [courseHole, setCourseHole] = useState(1);
  const [currentHoleScorecard] = scoreCard.filter(scoreCardHole => scoreCardHole.hole === courseHole);

  useEffect(() => {
    if (courseHole > 18) {
      dispatch({ type: "SET_TOTAL_SCORE"})
      navigate(`/user-pages/round-summary`)
    } else {
      navigate(`/user-pages/course/${id}/${courseHole}`)
    } 
  }, [courseHole])
 
  return (
    <Container className="course-hole">
      <Grid container justify="space-between" alignItems="center" className="course-hole__top-headings">
         <Grid item>
           <Grid container justify="center" direction="column"  >
              <Grid item>
              <Typography variant="h1" align="center">
            Stroke Play
          </Typography>
              </Grid>
              <Grid item>
              <Typography variant="h2" align="center">
            Individual
          </Typography>
              </Grid>
           </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" direction="column">
            <Grid item>
              <Typography variant="h2">
                {`S/I ${currentHoleScorecard?.strokeIndex && currentHoleScorecard.strokeIndex}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2">
                {`Yards Yellow ${currentHoleScorecard?.yardsYellow && currentHoleScorecard.yardsYellow}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2">
                {`Yards White ${currentHoleScorecard?.yardsWhite && currentHoleScorecard.yardsWhite}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
      </Grid>
      <Grid container justify="flex-end" direction="column" alignItems="center" className="course-hole__sub-headings">
        <Grid item>
          <Typography variant="h4" color="primary">
            Chesterfield Golf Club
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" color="secondary">
            {`Hole ${currentHoleScorecard?.hole && currentHoleScorecard.hole}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" color="secondary">
            {`Par ${currentHoleScorecard?.par && currentHoleScorecard.par}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-around" alignItems="center" className="course-hole__center-content">
        <Grid item>
        <Button disabled={!shots} size="large" variant="outlined" color="secondary" disableElevation disableRipple disableFocusRipple onClick={(e) => handleScoreChange(e, "minus")}>
           -
         </Button>
        </Grid>
        <Grid item className="course-hole__center-content__score-border">
          <Typography variant="h1" className="course-hole__center-content__score-border__score">
            {shots}
          </Typography>
        </Grid>
        <Grid item>
        <Button size="large" variant="outlined" color="secondary" disableElevation disableRipple disableFocusRipple onClick={(e) => handleScoreChange(e, "plus")}>
           +
         </Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
        <Button disabled={!shots} size="large" variant="contained" color="primary" onClick={handleNextHoleClick}>
           Submit
        </Button>
        </Grid>
      </Grid>
        </Container>
  );

  function handleNextHoleClick() {
    setCourseHole(currentHole => currentHole + 1)
    setShots(0)
    dispatch({ type: "SET_HOLE_SCORE", payload: { shots, courseHole}})
  }
  
  function handleScoreChange(e: MouseEvent<HTMLButtonElement>, operator: string) {
    if (operator === "minus") {
      setShots(currentShots => currentShots - 1)
    }
  
    if (operator === "plus") {
      setShots(currentShots => currentShots + 1)
    }
  }  
};

export default CourseHole;