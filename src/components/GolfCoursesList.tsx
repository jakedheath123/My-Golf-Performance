import React, {FunctionComponent, useEffect, useState} from 'react';
import { RouteComponentProps } from "@reach/router"
import Grid from '@material-ui/core/Grid';
import Spinner from "./Spinner"

import { GolfCourse } from "../models/golfCourse.modal"
import { firestore } from "../firebase"
import GolfCourseCard from "./GolfCourseCard"

const GolfCoursesList: FunctionComponent<RouteComponentProps> = () => {
  const [golfCourses, setGolfCourses] = useState<GolfCourse[]>([])
  const [loading, setLoading] = useState(true)

  console.log(golfCourses, "<<<")

  useEffect(() => {
    firestore.collection("courses").get().then(snapshot => {
      const courses = snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() }; })
        setGolfCourses(courses)
        setLoading(false)
       }
      )
}, [])

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