
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
// import Main from './components/Main.jsx';
// import Greeting from './components/Greeting.jsx';
import App from './components/App.jsx';
import Table from './components/Table.jsx';

// import react-router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Table}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));