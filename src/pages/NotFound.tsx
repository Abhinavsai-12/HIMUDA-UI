import { Button } from '@mui/material';
import React from 'react';

export default function NotFound() {
  return (
    <div
      className="not-found-page"
      style={{ textAlign: 'center', padding: '50px' }}
    >
      <h1 className="text-bold">404 - Not Found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>

      <Button href="/" style={{ marginTop: '20px' }}>
        Home
      </Button>
    </div>
  );
}
