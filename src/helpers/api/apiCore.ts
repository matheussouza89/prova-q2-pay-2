/* eslint-disable @typescript-eslint/no-explicit-any */
import jwtDecode from 'jwt-decode'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:5000'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    let message

    if (error && error.response && error.response.status === 404) {
      window.location.href = '/not-found'
    } else if (error && error.response && error.response.status === 500) {
      window.location.href = '/server-error'
    } else {
      switch (error.response.status) {
        case 401:
          message = 'Invalid credentials'
          break
        case 403:
          message = 'Access Forbidden'
          break
        case 404:
          message = 'Sorry! the data you are looking for could not be found'
          break
        default: {
          message =
            error.response && error.response.data
              ? error.response.data['message']
              : error.message || error
        }
      }
      return Promise.reject(message)
    }
  }
)

const setAuthorization = (token: string | null) => {
  if (token) axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  else delete axios.defaults.headers.common['Authorization']
}

class APICore {
  get = (url: string, params: any) => {
    let response
    if (params) {
      const queryString = params
        ? Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&')
        : ''
      response = axios.get(`${url}?${queryString}`, params)
    } else {
      response = axios.get(`${url}`, params)
    }
    return response
  }

  create = (url: string, data: any) => {
    return axios.post(url, data)
  }

  update = (url: string, data: any) => {
    return axios.put(url, data)
  }

  delete = (url: string) => {
    return axios.delete(url)
  }

  isAuthenticated = () => {
    const token = localStorage.getItem('TOKEN_KEY')
    if (!token) {
      return false
    }

    const decoded: any = jwtDecode(token)
    const currentTime = Date.now() / 1000
    if (decoded.exp < currentTime) {
      return false
    } else {
      return true
    }
  }

  setLoggedInUser = (token: any) => {
    if (token) {
      localStorage.setItem('TOKEN_KEY', token)
      window.location.href = '/customers'
    } else {
      localStorage.removeItem('TOKEN_KEY')
    }
  }
}

export { APICore, setAuthorization }
