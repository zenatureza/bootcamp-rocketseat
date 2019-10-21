import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import NewEdit from '../pages/Meetups/Edit';
import Profile from '../pages/Profile';
import Details from '../pages/Meetups/Details';
import Create from '../pages/Meetups/Create';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetups/:id/edit" component={NewEdit} isPrivate />
      <Route path="/meetups/:id/details" component={Details} isPrivate />
      <Route path="/meetups/create" component={Create} isPrivate />
    </Switch>
  );
}
