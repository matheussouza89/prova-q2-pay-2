import Customers from 'pages/customers'
import Login from 'pages/login'
import { PrivateRoute } from 'components/privateRoute/PrivateRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { ptBR } from '@mui/material/locale'
import PageNotFound from 'pages/error/PageNotFound'
import ServerError from 'pages/error/ServerError'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = createTheme(ptBR)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="customers" element={<Customers />} />
            <Route path="not-found" element={<PageNotFound />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="server-error" element={<ServerError />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
