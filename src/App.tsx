import React, { FunctionComponent, lazy, Suspense } from "react";
import { Router } from "@reach/router";

import ErrorBoundary from "./components/ErrorBoundary";
import NavBar from "./components/NavBar"
import UserPages from "./components/UserPages"

const Login = lazy(() => import("./components/Login"));
const GolCourseList = lazy(() => import("./components/GolfCourseList"))

const App: FunctionComponent = () => {
  
  return (
      <ErrorBoundary>
        <Suspense fallback={<p>Loading..</p>}>
          <Router>
            <Login path="/" />
            <UserPages path="/*">
              <GolCourseList path="/golfcourselist"/>
            </UserPages>    
          </Router>
        </Suspense>
      </ErrorBoundary>
  );
};

export default App;

