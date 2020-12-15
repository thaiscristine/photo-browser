import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Spinner from '../components/Spinner';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Album = React.lazy(() => import('../pages/Album'));
const Photo = React.lazy(() => import('../pages/Photo'));
const Profile = React.lazy(() => import('../pages/Profile'));
// import LogIn from '../pages/LogIn';

const Routes: React.FC = () => (
  <Switch>
    <Suspense fallback={<Spinner />}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/album/:id" component={Album} />
      <Route path="/photo/:id" component={Photo} />
      <Route path="/profile/:id" component={Profile} />
    </Suspense>

    {/* <Route path="/" exact component={LogIn} /> */}
    {/* <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/album/:id" component={Album} isPrivate />
    <Route path="/photo/:id" component={Photo} isPrivate />
    <Route path="/profile/:id" component={Profile} isPrivate /> */}
  </Switch>
);

export default Routes;
