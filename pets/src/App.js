import React from 'react';
import './styles/App.scss';
import Login from './components/forms/Login.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import PetCard from './components/PetCard.jsx';

function App() {
  const counter = useSelector(state => state.counter); // call from reducer here
  const dispatch = useDispatch();

  return (
    // <div>
    //   <h2>Counter {counter}</h2>
    //   <button onClick={() => dispatch(increment(5))}>+</button>
    //   <button onClick={() => dispatch(decrement())}>-</button>
    // </div>
    <PetCard />
  );
}

export default App;
