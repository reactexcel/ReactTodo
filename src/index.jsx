import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app.jsx';
import EditItem from './editItem.jsx';
import './index.scss';

const Root = (props) => (
  <div>{props.children}</div>
);

const store = configureStore();

render(
  <Provider store={store} queryKey={false}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={App} />
        <Route path="edit/:id" component={EditItem} />
      </Route>
    </Router>
  </Provider>, document.querySelector("#app"));
