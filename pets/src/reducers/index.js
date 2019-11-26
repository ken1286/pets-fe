import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import loginRegister from './login-register';
import mainview from './mainview';

const allReducers = combineReducers({
  // counter: counterReducer,
  loginRegister,
  mainview
});

export default allReducers;
