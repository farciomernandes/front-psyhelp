import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Route from './Route';

import SingIn from '../pages/SignIn/index';
import SingUp from '../pages/SignUp/index';
import SignUpPsicologo from '../pages/SignUpPsicologo/index';


import Dashboard from '../pages/Dashboard/index';
import Forum from '../pages/Forum/index';
import Posts from '../pages/Posts/index';
import Comment from '../pages/Comment/index';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route exact path="/signup" component={SingUp} />
    <Route path="/signup/psicologo" component={SignUpPsicologo} />


    <Route path="/dashboard" component={Posts} />
    <Route path="/psicologos" component={Dashboard} />
    <Route path="/forum" component={Forum} />
    <Route path="/comment" component={Comment} />


  </Switch>
);

export default Routes;