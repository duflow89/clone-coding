import { Route, Routes } from 'react-router-dom';
import Request from './client/Request';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Request />} />
  </Routes>
);

export default AppRoutes;
