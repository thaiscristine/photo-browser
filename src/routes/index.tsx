import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Album from '../pages/Album';
import Photo from '../pages/Photo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/album/:id" component={Album} />
    <Route path="/photo/:id" component={Photo} />
  </Switch>
);

export default Routes;
