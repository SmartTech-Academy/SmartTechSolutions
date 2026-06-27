// reducers/index.js
import { combineReducers } from 'redux';
import { CartReducer } from '../reducer/CartReducer';

const rootReducer = combineReducers({
  CartReducer,
});

export default rootReducer;
