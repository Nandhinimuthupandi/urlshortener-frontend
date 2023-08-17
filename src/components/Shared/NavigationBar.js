import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/shorten-url">Shorten URL</Link></li>
        <li><Link to="/url-listing">URL Listing</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/forgot-password">Forgot Password</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

