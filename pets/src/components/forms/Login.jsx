import React, { useState, useEffect } from 'react';

const Login = () => {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const handleChanges = e => {
  //   setValue(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={e => {
            setUsername(e.target.value);
            console.log(username);
          }}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
      </label>
      <button onClick={handleSubmit}>Hello</button>
    </form>
  );
};

export default Login;
