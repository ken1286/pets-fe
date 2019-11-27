import React from 'react';
import './styles/App.scss';
import LoginRegister from './components/forms/LoginRegister';
import MainView from './components/MainView';
import PrivateRoute from './PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './actions';
// import PetCard from './components/PetCard.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // const counter = useSelector(state => state.counter); // call from reducer here

  return (
    <Router>
      {/* //{' '}
      <div>
        // <h2>Counter {counter}</h2>
        // <button onClick={() => dispatch(increment(5))}>+</button>
        // <button onClick={() => dispatch(decrement())}>-</button>
        //{' '}
      </div>
      // <PetCard /> */}
      {/* <Switch> */}
      <Route path='/login' component={LoginRegister} />
      <PrivateRoute path='/' component={MainView} />
      {/* </Switch> */}
    </Router>
  );
}

export default App;
