import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Chat from './components/Chat'
import Signup from './components/Signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/chat' component={Chat}></Route>
      </Switch>
    </Router>
  );
}

export default App;
