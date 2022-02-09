import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/HomePage';

export function HomeRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}
