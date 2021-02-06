import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";
import ErrorBoundary from "./components/ErrorBoundary";

const Login = lazy(() => import("./components/Login"));

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading..</p>}>
          <Router>
            <Login path="/" />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
