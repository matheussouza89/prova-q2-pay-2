import { APICore } from './apiCore'

const api = new APICore()

export function register() {
  const baseUrl = `/register`
  return api.create(baseUrl, {
    email: 'olivier@mail.com',
    password: 'bestPassw0rd'
  })
}

export function signin() {
  const baseUrl = `/login`
  return api.create(baseUrl, {
    email: 'olivier@mail.com',
    password: 'bestPassw0rd'
  })
}
