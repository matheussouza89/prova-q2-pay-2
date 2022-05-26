import Customers from 'pages/customers'
import Login from 'pages/login'
import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet
} from 'react-router-dom'
import { store } from 'redux/store'
import { isAuthenticated } from 'util/auth'

const PrivateRoute = () =>
  isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
