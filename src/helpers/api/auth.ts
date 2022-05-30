import { AuthData } from 'models/types'
import { APICore } from './apiCore'

const api = new APICore()

export function register() {
  const baseUrl = `/register`
  return api.create(baseUrl, {
    email: 'guilherme@gmail.com',
    password: '123456'
  })
}

export function login(data: AuthData) {
  const baseUrl = `/login`
  return api.create(baseUrl, data)
}
