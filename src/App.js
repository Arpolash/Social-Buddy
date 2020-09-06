import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Post from './Components/Post/Post';
import NotFound from './Components/NotFound/NotFound';
import PostMoreDetails from './Components/PostMoreDetails/PostMoreDetails';
import Header from './Components/Header/Header'


function App() {
  return (
    <div>
       <Header></Header>
    <Router>
      <Switch>
      <Route exact path="/">
        <Post></Post>
        </Route>
        <Route path="/post">
        <Post></Post>
        </Route>
        <Route path="/:id">
          <PostMoreDetails></PostMoreDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
