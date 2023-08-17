import React, { useState } from 'react';
import axios from 'axios';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/auth/register', {
        email,
        firstName,
        lastName,
        password,
      });

      if (response.status === 200) {
        setRegistrationMessage('Registration successful!'); // Show success message
      } else {
        setRegistrationMessage(`Registration failed: ${response.data.message}`); // Show error message
      }
    } catch (error) {
      setRegistrationMessage('An error occurred during registration.'); // Show generic error message
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
}

export default RegistrationPage;
