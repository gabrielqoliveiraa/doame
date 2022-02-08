import { BrowserRouter as Router } from 'react-router-dom';
import { LoginRoutes } from './LoginRoutes';

export function AppRoutes() {
  return (
    <Router>
      <LoginRoutes />
    </Router>
  );
}
