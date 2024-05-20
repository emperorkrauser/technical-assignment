import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../login';
import { Dashboard } from '../pages';

export const PublicPages = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={!isAuth ? <Login /> : <Dashboard />} />

        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Login />} />
      </Routes>
    </Router>
  );
};
