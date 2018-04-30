import { handleActions } from 'redux-actions';

export const initialState = {
  list: ''
};

export const home = handleActions({
  CHANGE_NAME: (state, action) => ({ list: action.payload })
}, initialState);
