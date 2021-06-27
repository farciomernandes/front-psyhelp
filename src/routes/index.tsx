import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Router';

import SingIn from '../pages/SignIn/index';
import SingUp from '../pages/SignUp/index';
import SignUpPsicologo from '../pages/SignUpPsicologo/index';


import Dashboard from '../pages/Dashboard/index';
import Forum from '../pages/Forum/index';
import Posts from '../pages/Posts/index';
import NewPost from '../pages/NewPost/index';
import SearchedForum from '../pages/SearchedForum/index';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route exact path="/signup" component={SingUp} />
    <Route path="/signup/psicologo" component={SignUpPsicologo} />


    <Route path="/dashboard" isPrivate component={Posts} />
    <Route path="/psicologos" isPrivate component={Dashboard} />
    <Route path="/forum" isPrivate component={Forum} />
    <Route path="/newpost" isPrivate component={NewPost} />
    <Route path="/search" isPrivate component={SearchedForum} />



  </Switch>
);

export default Routes;