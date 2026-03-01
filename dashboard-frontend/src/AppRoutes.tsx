import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.tsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
