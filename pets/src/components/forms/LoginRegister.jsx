import React from 'react';
import Login from './Login';
import Register from './Register';

const LoginRegister = props => {
  return (
    <div class='login'>
      <Login {...props} />
      {/* <Register {...props} /> */}
    </div>
  );
};

export default LoginRegister;
