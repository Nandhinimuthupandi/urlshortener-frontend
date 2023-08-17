import React, { useState } from 'react';
import axios from 'axios';

function ShortenURLPage() {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleShortenURL = async () => {
    try {
      const response = await axios.post('/api/url/shorten', {
        longURL,
      });

      if (response.status === 200) {
        setShortURL(response.data.shortURL); // Update the short URL
        setErrorMessage(''); // Clear any previous error message
      }
    } catch (error) {
      setShortURL(''); // Clear the short URL
      setErrorMessage('Error shortening URL.'); // Show error message
      console.error('URL shortening error:', error);
    }
  };

  return (
    <div>
      <h2>Shorten URL</h2>
      <input type="text" placeholder="Enter Long URL" value={longURL} onChange={(e) => setLongURL(e.target.value)} />
      <button onClick={handleShortenURL}>Shorten</button>
      {shortURL && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortURL} target="_blank" rel="noopener noreferrer">{shortURL}</a>
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default ShortenURLPage;
