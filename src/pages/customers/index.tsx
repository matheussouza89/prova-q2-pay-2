import React, { useEffect, useState } from 'react'
import Main from 'layouts/Main'
import CustomTable from 'components/customTable'
import Breadcrumbs from 'components/breadcrumbs'
import { COLUMNS } from './constants/columns'
import { Button } from 'reactstrap'
import useRedux from 'hooks/useRedux'
import CustomModal from 'components/customModal'
import Register from './components/Register'
import {
  cleanCustomer,
  getCustomers,
  postCustomer,
  putCustomer,
  setSeeRegister,
  setStateModal
} from 'redux/actions'

const Customers = () => {
  const { dispatch, appSelector } = useRedux()
  const { customers, customer, loadingTable, isOpenModal, seeRegister } =
    appSelector((state) => ({
      customers: state.Customers.customers,
      customer: state.Customers.customer,
      loadingTable: state.Customers.loadingTable,
      isOpenModal: state.Customers.isOpenModal,
      seeRegister: state.Customers.seeRegister
    }))

  useEffect(() => {
    dispatch(getCustomers(1, 3))
  }, [dispatch])

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(3)

  const handleClose = () => {
    dispatch(cleanCustomer())
    dispatch(setStateModal(false))
    dispatch(setSeeRegister(false))
  }

  const handleShow = () => {
    dispatch(setStateModal(true))
  }

  function salvar() {
    if (!customer.id) {
      return dispatch(postCustomer(customer))
    }
    return dispatch(putCustomer(customer.id, customer))
  }

  return (
    <Main>
      <Breadcrumbs
        title="Customer"
        breadcrumbItems={[
          { label: 'Customer', path: '/pages/home', active: true }
        ]}
      />
      <div className="d-flex justify-content-end">
        <Button className="btn-default" onClick={() => handleShow()}>
          Cadastrar
        </Button>
      </div>
      <div className="container-table mt-4">
        <CustomTable
          columns={COLUMNS}
          data={customers}
          isLoading={loadingTable}
          onPageChange={getCustomers}
          onPageSizeChange={getCustomers}
          page={page}
          pageSize={pageSize}
          setPage={setPage}
          setPageSize={setPageSize}
        />
      </div>
      <CustomModal
        isOpen={isOpenModal}
        handleClose={handleClose}
        title="Customer"
        footer={
          <>
            <Button color="danger" onClick={handleClose}>
              Fechar
            </Button>
            <Button
              disabled={seeRegister}
              className="btn-default"
              onClick={() => salvar()}
            >
              Salvar
            </Button>
          </>
        }
      >
        <Register data={customer} seeRegister={seeRegister} />
      </CustomModal>
    </Main>
  )
}

export default Customers
