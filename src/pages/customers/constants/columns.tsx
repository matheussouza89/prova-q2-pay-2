import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { BsPencil, BsTrash } from 'react-icons/bs'

export const COLUMNS: GridColDef[] = [
  { field: 'document', headerName: 'CPF/CNPJ', width: 200 },
  { field: 'name', headerName: 'Nome', width: 200 },
  {
    field: 'code',
    headerName: 'Código',
    // width: 130,
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
    // width: 90,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bank.agency || ''}`
  },
  {
    field: 'account',
    headerName: 'Conta',
    sortable: true,
    // width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bank.account || ''}`
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Ações',
    renderCell: () => (
      <>
        <BsTrash />
        <BsPencil />
      </>
    )
  }
]
