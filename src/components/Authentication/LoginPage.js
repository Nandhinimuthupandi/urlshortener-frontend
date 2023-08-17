import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setLoginMessage('Login successful!'); // Show success message
        // Redirect to dashboard or another page
      } else {
        setLoginMessage(`Login failed: ${response.data.message}`); // Show error message
      }
    } catch (error) {
      setLoginMessage('An error occurred during login.'); // Show generic error message
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
}

export default LoginPage;
