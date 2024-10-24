import React, { useState, useEffect } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

function ApiCallExample({ endpoint }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeApiCall = async () => {
    if (isLoading || response) return;
    setIsLoading(true);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading API response...</p>
      ) : response ? (
        <LiveProvider code={response}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      ) : (
        <p>Failed to load API response. Please try again later.</p>
      )}
    </div>
  );
}

export default ApiCallExample;
