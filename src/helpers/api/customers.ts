import { APICore } from './apiCore'

const api = new APICore()

export function getCustomers() {
  const baseUrl = '/b4915d7f-ea1c-4717-ae9e-a5165f7c9cc5'
  return api.get(baseUrl, {})
}
