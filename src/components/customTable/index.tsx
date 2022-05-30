/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import NoData from './NoData'
import useRedux from 'hooks/useRedux'

interface CustomTableProps {
  data: any[]
  columns: GridColDef[]
  isLoading?: boolean
  onPageChange?: any
  onPageSizeChange?: any
  page: number
  pageSize: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  setPageSize: React.Dispatch<React.SetStateAction<number>>
}

export default function CustomTable({
  data,
  columns,
  isLoading,
  onPageChange,
  onPageSizeChange,
  page,
  pageSize,
  setPage,
  setPageSize
}: CustomTableProps) {
  const { dispatch } = useRedux()
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        rowsPerPageOptions={[1, 2, 3]}
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPage) => {
          setPage(newPage)
          if (onPageChange) {
            dispatch(onPageChange(newPage, pageSize))
          }
        }}
        onPageSizeChange={(newPageSize) => {
          setPageSize(newPageSize)
          if (onPageSizeChange) {
            dispatch(onPageSizeChange(page, newPageSize))
          }
        }}
        loading={isLoading}
        rowCount={3} //Todo: verificar se existe possibilidade de trazer o número total de registros
        disableSelectionOnClick
        components={{
          NoResultsOverlay: () => {
            return <NoData />
          }
        }}
      />
    </div>
  )
}
