import './stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import Application from './components/application';

render((
  <Router history={ browserHistory }>
    <Route component={ Application }>
      <Redirect from="*" to="/"/>
    </Route>
  </Router>
), document.getElementById('app'));
