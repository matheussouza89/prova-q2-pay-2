import React, { useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface CustomTableProps {
  data: any[]
  columns: GridColDef[]
  totalRegistros?: number
  isLoading?: boolean
  onPageChange?: () => void
  onPageSizeChange?: () => void
}

export default function CustomTable({ data, columns }: CustomTableProps) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(1)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        rowsPerPageOptions={[1, 2, 3]}
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPage) => setPage(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        loading={false}
        rowCount={3}
      />
    </div>
  )
}
