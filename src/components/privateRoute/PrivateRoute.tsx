import { isAuthenticated } from 'helpers/api/apiCore'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () =>
  isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />
