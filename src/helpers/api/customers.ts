import { APICore } from './apiCore'

const api = new APICore()

export function getCustomers() {
  const baseUrl = `/customers`
  return api.get(baseUrl, {})
}

export function getCustomer(params: { id: number }) {
  const baseUrl = `/customers/${params.id}`
  return api.get(baseUrl, {})
}
