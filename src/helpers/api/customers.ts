import { APICore } from './apiCore'
import { CustomersData } from 'models/types'

const api = new APICore()

export function getCustomers() {
  const baseUrl = `/customers`
  return api.get(baseUrl, {})
}

export function getCustomer(params: { id: number }) {
  const baseUrl = `/customers/${params.id}`
  return api.get(baseUrl, {})
}

export function createCustomer(params: { data: CustomersData }) {
  const baseUrl = `/customers`
  return api.create(baseUrl, params.data)
}

export function removeCustomer(params: { id: number }) {
  const baseUrl = `/customers/${params.id}`
  return api.delete(baseUrl)
}
