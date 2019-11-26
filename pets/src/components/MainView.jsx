import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPets } from '../actions';

const MainView = () => {
  const pets = useSelector(state => state.mainview);
  const dispatch = useDispatch();
  console.log(pets);

  useEffect(() => {
    dispatch(getPets());
  }, []);

  return <h1>Welcome!</h1>;
};

export default MainView;
