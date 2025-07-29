// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import ShopLayout from '../layouts/ShopLayout';
import AuthLayout from '@/layouts/AuthLayout';

import Home from '../pages/Home';
import Login from '../pages/auth/Login';  
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root (/) to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Default Layout Routes */}
      <Route element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>

      {/* Shop Layout Route */}
      <Route element={<ShopLayout />}>
        {/* Add shop-specific routes here */}
      </Route>

      {/* Auth Layout Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
