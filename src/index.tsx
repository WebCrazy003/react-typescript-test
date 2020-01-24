import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import configureStore from './reducers/store';
import { PrimaryLayout } from './containers/layout';

import './index.css';

const root = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div id="app">
      <BrowserRouter>
        <Route path="/" component={PrimaryLayout} />
      </BrowserRouter>
    </div>
  </Provider>,
  root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
