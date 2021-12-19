import { Route, Routes } from 'react-router-dom';
import Request from './Client/Request';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Request />} />
  </Routes>
);

export default AppRoutes;
