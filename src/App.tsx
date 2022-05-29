import Customers from 'pages/customers'
import Login from 'pages/login'
import { Provider } from 'react-redux'
import { PrivateRoute } from 'components/privateRoute/PrivateRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from 'redux/store'
import { createTheme, ThemeProvider } from '@mui/material'
import { ptBR } from '@mui/material/locale'

const theme = createTheme(ptBR)

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="customers" element={<Customers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
