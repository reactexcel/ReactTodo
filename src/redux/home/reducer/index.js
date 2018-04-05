import { handleActions } from 'redux-actions';

export const initialState = {
  name: 'world'
};

export const login = handleActions({
  CHANGE_NAME: (state, action) => {
    console.log(action, state, initialState, '========')
    return({ name: action.payload });
  }
}, initialState);
