import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Count = lazy(() => import('src/containers/Count'));

const RouterComponent = () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Count}></Route>
      </Switch>
    </Suspense>
  </Router>
);

export default RouterComponent;
