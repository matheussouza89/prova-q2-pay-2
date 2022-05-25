import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from 'redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* {RouteGenerator()} */}
          <Route path="/Login" element={<></>} />
        </Routes>
        {/* <ToastContainer /> */}
        {/* <GlobalStyle /> */}
      </BrowserRouter>
    </Provider>
  )
}

export default App
