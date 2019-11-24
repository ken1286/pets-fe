import React, { useState, useEffect } from 'react';

const Login = () => {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChanges = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Login;
