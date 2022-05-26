import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from 'util/auth'

export const PrivateRoute = () =>
  isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />
