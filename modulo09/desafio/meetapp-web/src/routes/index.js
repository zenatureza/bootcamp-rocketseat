import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import NewEdit from '../pages/Meetups/NewEdit';
import Profile from '../pages/Profile';
import Details from '../pages/Meetups/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetups/newedit" component={NewEdit} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetups/:id/details" component={Details} isPrivate />
    </Switch>
  );
}
