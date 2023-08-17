import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Shared/NavigationBar';
import DashboardPage from './components/Dashboard/DashboardPage';
import ShortenURLPage from './components/URLShortener/ShortenURLPage';
import URLListingPage from './components/URLShortener/URLListingPage';
import LoginPage from './components/Authentication/LoginPage';
import RegistrationPage from './components/Authentication/RegistrationPage';
import ForgotPasswordPage from './components/Authentication/ForgotPasswordPage';
import PasswordResetPage from './components/Authentication/PasswordResetPage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/shorten-url" element={<ShortenURLPage />} />
        <Route path="/url-listing" element={<URLListingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<PasswordResetPage />} />
      </Routes>
    </Router>
  );
}

export default App;



