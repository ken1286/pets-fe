import React from 'react';
import Login from './forms/Login';
import Register from './forms/Register';

const LoginRegisterView = props => {
  return (
    <div className='login'>
      <Login {...props} />
      <Register {...props} />
    </div>
  );
};

export default LoginRegisterView;
