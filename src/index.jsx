import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

const garageName = prompt("What's your garage") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};


const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,

});

const middlewares = applyMiddleware(reduxPromise, logger);

const store = { reducers, initialState, middlewares };

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(store)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
