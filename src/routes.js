import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from './components/navbar';
import Index from './components/index';
import New from './components/new';
import Show from './components/show';
import Signin from './components/signin';
import Signup from './components/signup';
import RequireAuth from './components/require-auth';

export default(
  <Route path="/" component={Navbar}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="/:id" component={Show} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
  </Route>
);
