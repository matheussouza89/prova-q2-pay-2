import Customers from 'pages/customers'
import Login from 'pages/login'
import { Provider } from 'react-redux'
import { PrivateRoute } from 'components/privateRoute/PrivateRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { ptBR } from '@mui/material/locale'
import { configureStore } from 'redux/store'
import PageNotFound from 'pages/error/PageNotFound'
import ServerError from 'pages/error/ServerError'

const theme = createTheme(ptBR)

function App() {
  return (
    <Provider store={configureStore({})}>
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
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
