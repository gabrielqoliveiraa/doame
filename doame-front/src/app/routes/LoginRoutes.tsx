import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/LoginPage';

export function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
}
