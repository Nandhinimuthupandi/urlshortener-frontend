import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PasswordResetPage() {
  const { token } = useParams(); // Get the token from the URL parameter
  const [password, setPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handlePasswordReset = async () => {
    try {
      const response = await axios.post(`/api/auth/reset-password/${token}`, {
        password,
      });

      if (response.status === 200) {
        setResetMessage('Password reset successful!'); // Show success message
      } else {
        setResetMessage(`Password reset failed: ${response.data.message}`); // Show error message
      }
    } catch (error) {
      setResetMessage('An error occurred during password reset.'); // Show generic error message
      console.error('Password reset error:', error);
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handlePasswordReset}>Reset Password</button>
      {resetMessage && <p>{resetMessage}</p>}
    </div>
  );
}

export default PasswordResetPage;
