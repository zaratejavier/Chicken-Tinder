import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import JoinGroup from './components/JoinGroup';
import CreateGroup from './components/CreateGroup';
import Swipe from './components/Swipe';
import Match from './components/Match';
import NoMatch from './components/NoMatch';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/JoinGroup' component={JoinGroup}/>
      <Route exact path='/CreateUser' component={CreateUser}/>
      <Route exact path='/CreateGroup' component={CreateGroup}/>
      <Route exact path='/Swipe' component={Swipe}/>
      <Route exact path='/Match' component={Match}/>
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;
