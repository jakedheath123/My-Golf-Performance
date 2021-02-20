import React, { FunctionComponent, lazy, Suspense } from "react";
import { Router } from "@reach/router";

import ErrorBoundary from "./components/ErrorBoundary";
import UserPagesContainer from "./components/UserPagesContainer"

const Login = lazy(() => import("./components/Login"));
const GolCoursesList = lazy(() => import("./components/GolfCoursesList"))

const App: FunctionComponent = () => {
  
  return (
      <ErrorBoundary>
        <Suspense fallback={<p>Loading..</p>}>
          <Router>
            <Login path="/" />
            <UserPagesContainer path="/*">
              <GolCoursesList path="/golfcourseslist"/>
            </UserPagesContainer>    
          </Router>
        </Suspense>
      </ErrorBoundary>
  );
};

export default App;

