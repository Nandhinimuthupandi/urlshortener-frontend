import React, { useState } from 'react';
import axios from 'axios';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('/api/auth/forgot-password', {
        email,
      });

      if (response.status === 200) {
        setResetMessage('Password reset link sent!'); // Show success message
      } else {
        setResetMessage(`Password reset failed: ${response.data.message}`); // Show error message
      }
    } catch (error) {
      setResetMessage('An error occurred while sending reset link.'); // Show generic error message
      console.error('Forgot password error:', error);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleForgotPassword}>Send Reset Link</button>
      {resetMessage && <p>{resetMessage}</p>}
    </div>
  );
}

export default ForgotPasswordPage;
