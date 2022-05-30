import { APICore } from 'helpers/api/apiCore'
import { Navigate, Outlet } from 'react-router-dom'

const api = new APICore()

export const PrivateRoute = () =>
  api.isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />
