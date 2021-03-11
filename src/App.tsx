import React, { FunctionComponent, lazy, Suspense } from "react";
import { Router } from "@reach/router";

import ErrorBoundary from "./components/ErrorBoundary";
import UserPagesContainer from "./components/UserPagesContainer"
import SelectedCourse from "./components/SelectedCourse"
import CourseHole from "./components/CourseHole"
import RoundSummary from "./components/RoundSummary"

const Login = lazy(() => import("./components/Login"));
const GolCourseList = lazy(() => import("./components/GolfCourseList"))

const App: FunctionComponent = () => {
  
  return (
      <ErrorBoundary>
        <Suspense fallback={<p>Loading..</p>}>
          <Router primary={false}>
            <Login path="/" />
            <UserPagesContainer path="/user-pages">
              <GolCourseList path="/golf-course-list"/>
              <SelectedCourse path="/course/:courseId"/>
              <CourseHole path={"/course/:courseId/:hole"} />
              <RoundSummary path={"/round-summary"}/>
            </UserPagesContainer>    
          </Router>
        </Suspense>
      </ErrorBoundary>
  );
};

export default App;

