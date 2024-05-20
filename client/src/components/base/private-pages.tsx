import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../login';
import { Dashboard } from '../pages';
import { ProtectedRoutes } from './protected-routes';

export const PrivatePages = ({ isAuth }: { isAuth: boolean }) => {
  console.log('isAuth', isAuth);
  return (
    <Router>
      <Routes>
        <Route path='/' element={!isAuth ? <Login /> : <Dashboard />} />
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/*' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};
