/* eslint-disable @typescript-eslint/no-explicit-any */
// import jwtDecode from 'jwt-decode'
import axios from 'axios'
// import config from '../../config'

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

// const getUserFromSession = () => {
//   const user = sessionStorage.getItem('user')
//   return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null
// }

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

  // isUserAuthenticated = () => {
  //   const user = this.getLoggedInUser()

  //   if (!user || (user && !user.token)) {
  //     return false
  //   }
  //   const decoded: any = jwtDecode(user.token)
  //   const currentTime = Date.now() / 1000
  //   if (decoded.exp < currentTime) {
  //     console.warn('access token expired')
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // setLoggedInUser = (session: any) => {
  //   if (session)
  //     sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session))
  //   else {
  //     sessionStorage.removeItem(AUTH_SESSION_KEY)
  //   }
  // }

  // getLoggedInUser = () => {
  //   return getUserFromSession()
  // }

  // setUserInSession = (modifiedUser: any) => {
  //   const userInfo = sessionStorage.getItem(AUTH_SESSION_KEY)
  //   if (userInfo) {
  //     const { token, user } = JSON.parse(userInfo)
  //     this.setLoggedInUser({ token, ...user, ...modifiedUser })
  //   }
  // }
}

// const user = getUserFromSession()
// if (user) {
//   const { token } = user
//   if (token) {
//     setAuthorization(token)
//   }
// }

export { APICore, setAuthorization }
