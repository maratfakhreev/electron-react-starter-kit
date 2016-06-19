import './stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Application from './components/application';
import Home from './components/home';

render((
  <Router history={ hashHistory }>
    <Route component={ Application }>
      <Route path="/" component={ Home }/>
      <Redirect from="*" to="/"/>
    </Route>
  </Router>
), document.getElementById('app'));
