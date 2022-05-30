export type CustomersState = {
  customers?: CustomersData[]
  customer?: CustomersData
  loadingTable: boolean
}

export type CustomersData = {
  id?: number
  name: string
  document: string
  bank: {
    bankName: string
    code: string
    agency: string
    account: string
  }
}

export type AuthState = {
  login: AuthData
}

export type AuthData = {
  email: string
  password: string
}
