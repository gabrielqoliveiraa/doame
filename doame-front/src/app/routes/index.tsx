import { BrowserRouter as Router } from 'react-router-dom';
import { LoginRoutes } from './LoginRoutes';
import { HomeRoutes } from './HomeRoutes';

export function AppRoutes() {
  return (
    <Router>
      <LoginRoutes />
      <HomeRoutes />
    </Router>
  );
}
