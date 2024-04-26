import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior

    const userData = {
      email,
      password,
      username,
    };

    // Send POST request with axios
    axios.post('http://192.168.100.60:8000/sign_up/', userData)
      .then((response) => {
        if (response.status === 201) {
          setMessage('User created successfully'); // Success message
          setError(''); // Clear error message
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setError('User with this email already exists'); // Handle 409 conflict
          setMessage(''); // Clear success message
        } else {
          setError('An error occurred. Please try again.'); // General error message
          setMessage(''); // Clear success message
        }
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;
