import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import ActionsButtons from '../components/ActionsButtons'

export const COLUMNS: GridColDef[] = [
  { field: 'document', headerName: 'CPF/CNPJ', width: 200 },
  { field: 'name', headerName: 'Nome', width: 200 },
  {
    field: 'code',
    headerName: 'Código',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bank.code || ''}`
  },
  {
    field: 'bankName',
    headerName: 'Banco',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bank.bankName || ''}`
  },
  {
    field: 'agency',
    headerName: 'Agência',
    type: 'number',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bank.agency || ''}`
  },
  {
    field: 'account',
    headerName: 'Conta',
    sortable: true,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bank.account || ''}`
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Ações',
    renderCell: (params) => <ActionsButtons id={params.row.id} />
  }
]
