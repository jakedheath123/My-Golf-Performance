import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

const Login = lazy(() => import("./components/Login"));

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading..</p>}>
        <Router>
          <Login path="/" />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
