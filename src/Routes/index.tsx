import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Route from './Route';

import SingIn from '../Pages/SignIn/index';
import SingUp from '../Pages/SignUp/index';

import Dashboard from '../Pages/Dashboard/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/signup" component={SingUp} />

    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;