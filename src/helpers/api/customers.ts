import { APICore } from './apiCore'

const api = new APICore()

export function getCustomers() {
  const baseUrl = '/customers'
  return api.get(baseUrl, {})
}
