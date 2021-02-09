import React, { FunctionComponent, lazy, Suspense } from "react";
import { Router } from "@reach/router";

import ErrorBoundary from "./components/ErrorBoundary";

const Login = lazy(() => import("./components/Login"));

const App: FunctionComponent = () => {
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
