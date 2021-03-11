import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router"
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import { useFirestore } from "../hooks/useFirestore"
import GolfCourseCard from "./GolfCourseCard"
import CoursesCarousel from "./CoursesCarousel";

const GolfCourseList: FunctionComponent<RouteComponentProps> = () => {
  const { loading, error }: any = useFirestore("courses");
  const { golfCourseList } = useSelector(state => state.golfCourses)

  if (loading) return <p>Loading</p>

  return (
    <Fade in={true} timeout={{enter: 1000}}>
      <CoursesCarousel />
    </Fade>
  )
}

export default GolfCourseList;