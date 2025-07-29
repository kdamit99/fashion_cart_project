import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import ShopLayout from '../layouts/ShopLayout';

import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default Layout Routes */}
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Shop Layout Route */}
      <Route element={<ShopLayout />}>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
