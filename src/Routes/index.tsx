import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Route from './Route';

import SingIn from '../Pages/SignIn/index';
import SingUp from '../Pages/SignUp/index';

import Dashboard from '../Pages/Dashboard/index';
import Forum from '../Pages/Forum/index';
import Posts from '../Pages/Posts/index';
import Comment from '../Pages/Comment/index';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/signup" component={SingUp} />

    <Route path="/dashboard" component={Posts} />
    <Route path="/psicologos" component={Dashboard} />
    <Route path="/forum" component={Forum} />
    <Route path="/comment" component={Comment} />


  </Switch>
);

export default Routes;