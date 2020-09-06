import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './Components/Post/Post';
import MoreDetails from './Components/MoreDetail/MoreDetails';
import NotFound from './Components/NotFound/NotFound';

const Main = () => {
    return (
    <div>
        <Router>
          <Switch>
          <Route exact path="/">
            <Post></Post>
            </Route>
            <Route exact path="/post">
            <Post></Post>
            </Route>
            <Route path="/:id">
              <MoreDetails></MoreDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        </div>
    );
};

export default Main;