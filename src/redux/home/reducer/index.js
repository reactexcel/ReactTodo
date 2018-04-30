import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

export const initialState = {
  list: ''
};

export const home = handleActions({
  CHANGE_NAME: (state, action) => update(state, { list: { $set: action.payload } })
}, initialState);
