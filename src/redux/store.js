import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';

const applyStore = applyMiddleware(thunk)(createStore);

export default function configureStore(state) {
  const store = applyStore(reducer, state);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
