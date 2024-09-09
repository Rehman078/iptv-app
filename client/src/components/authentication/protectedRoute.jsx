import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  // Render the protected route component if authenticated
  return children;
}

export default ProtectedRoute;
