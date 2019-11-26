import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions';
import { useHistory } from 'react-router-dom';

const Login = props => {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // const handleChanges = e => {
  //   setValue(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password
    };

    dispatch(login(credentials)).then(() => {
      history.push('/');
    });
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
