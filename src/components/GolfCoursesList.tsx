import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router"
import Grid from '@material-ui/core/Grid';
import Spinner from "./Spinner"

import { useFirestore } from "../hooks/useFirestore"
import GolfCourseCard from "./GolfCourseCard"

const GolfCoursesList: FunctionComponent<RouteComponentProps> = () => {
  const [golfCourses, loading, error ] = useFirestore("courses")

  if (loading) return <Spinner />

  return (
    <Grid container alignItems="center" justify="center" direction="column">
    {golfCourses.map(course => (
      <GolfCourseCard key={course.id} course={course}/>
    ))}
    </Grid>
  )
}

export default GolfCoursesList;