import React, { useState, useEffect } from 'react';
import axios from 'axios';

function URLListingPage() {
  const [urlList, setURLList] = useState([]);

  useEffect(() => {
    // Fetch the list of created URLs from the server
    const fetchURLList = async () => {
      try {
        const response = await axios.get('/api/url/list');

        if (response.status === 200) {
          setURLList(response.data.urlList);
        }
      } catch (error) {
        console.error('Error fetching URL list:', error);
      }
    };

    fetchURLList();
  }, []);

  return (
    <div>
      <h2>URL Listing</h2>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Click Count</th>
          </tr>
        </thead>
        <tbody>
          {urlList.map((url) => (
            <tr key={url._id}>
              <td>{url.originalURL}</td>
              <td><a href={url.shortURL} target="_blank" rel="noopener noreferrer">{url.shortURL}</a></td>
              <td>{url.clickCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default URLListingPage;
