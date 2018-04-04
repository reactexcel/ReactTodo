import React from 'react';
import { render } from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app.jsx';
import EditItem from './editItem.jsx';
import './index.scss';

const Root = (props) => (
  <div>{props.children}</div>
);

render(<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={App} />
    <Route path="edit/:id" component={EditItem} />
  </Route>
</Router>, document.querySelector("#app"));
