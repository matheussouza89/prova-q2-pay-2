import Customers from 'pages/customers'
import Login from 'pages/login'
import { Provider } from 'react-redux'
import { PrivateRoute } from 'components/privateRoute/PrivateRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from 'redux/store'

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
