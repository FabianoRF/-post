import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreatePost from './pages/CreatePost';
import DashBoard from './pages/DashBoard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={DashBoard} exact />
        <Route path="/post/create" component={CreatePost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
