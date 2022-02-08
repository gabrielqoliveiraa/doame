import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/index';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}
