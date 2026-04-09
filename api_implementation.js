import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, []); // Empty array ensures this runs once on mount

  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}
