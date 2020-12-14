import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Dashboard from '../pages/Dashboard';
import Album from '../pages/Album';
import Photo from '../pages/Photo';
import Profile from '../pages/Profile';
import LogIn from '../pages/LogIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/album/:id" component={Album} isPrivate />
    <Route path="/photo/:id" component={Photo} isPrivate />
    <Route path="/profile/:id" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
