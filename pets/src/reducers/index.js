import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import loginRegister from './login-register';

const allReducers = combineReducers({
  // counter: counterReducer,
  loginRegister
});

export default allReducers;
