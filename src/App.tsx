import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPassword from './pages/auth/ForgotPassword';
import Home from './pages/home/Home';
import ResetPassword from './pages/auth/ResetPassword';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Users from './pages/users/Users';
import NotFound from './pages/dashboard/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Route>
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
