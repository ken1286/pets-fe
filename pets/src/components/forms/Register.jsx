import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const message = useSelector(state => state.loginRegister);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(message);

  // const handleChanges = e => {
  //   setValue(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const credentials = {
      username: username,
      password: password1,
      password2: password2
    };

    dispatch(register(credentials))
      .then(() => {
        history.push('/');
      })
      .catch(err => {
        console.log(err);
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
          value={password1}
          onChange={e => {
            setPassword1(e.target.value);
            console.log(password1);
          }}
        />
      </label>
      <label>
        Confirm password:
        <input
          type='password'
          value={password2}
          onChange={e => {
            setPassword2(e.target.value);
            console.log(password2);
          }}
        />
      </label>
      <button onClick={handleSubmit}>Register</button>
      {password1 !== password2 ? (
        <p>Passwords don't match!</p>
      ) : (
        <p>Passwords match!</p>
      )}
      {message.length > 0 ? <p>{message}</p> : null}
    </form>
  );
};

export default Register;
