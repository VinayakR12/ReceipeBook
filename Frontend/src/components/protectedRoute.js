import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;  // Redirect to login page if not authenticated
  }
  return children;  // Otherwise, render the protected content
};

export default ProtectedRoute;
