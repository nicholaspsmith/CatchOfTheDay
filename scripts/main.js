import React from 'react';
import ReactDOM from 'react-dom';
import { ReactRouter, Router, Route } from 'react-router';

import { createHistory } from 'history';


/*
  Import Components
*/

import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import App from './components/App';



/*
  Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeName" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'));
