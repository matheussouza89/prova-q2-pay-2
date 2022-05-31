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
  removeCustomer,
  setSeeRegister,
  setStateModal,
  setStateModalConfirmation
} from 'redux/actions'

const Customers = () => {
  const { dispatch, appSelector } = useRedux()
  const {
    customers,
    customer,
    loadingTable,
    isOpenModal,
    seeRegister,
    isOpenModalConfirmation,
    itemSelected
  } = appSelector((state) => ({
    customers: state.Customers.customers,
    customer: state.Customers.customer,
    loadingTable: state.Customers.loadingTable,
    isOpenModal: state.Customers.isOpenModal,
    seeRegister: state.Customers.seeRegister,
    isOpenModalConfirmation: state.Customers.isOpenModalConfirmation,
    itemSelected: state.Customers.itemSelected
  }))

  useEffect(() => {
    dispatch(getCustomers(0, 3))
  }, [dispatch])

  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(3)

  const handleClose = () => {
    dispatch(cleanCustomer())
    dispatch(setStateModal(false))
    dispatch(setSeeRegister(false))
  }

  const handleShow = () => {
    dispatch(setStateModal(true))
  }

  const handleCloseConfirmation = () => {
    dispatch(setStateModalConfirmation(false))
  }

  function salvar() {
    if (!customer.id) {
      return dispatch(postCustomer(customer))
    }
    return dispatch(putCustomer(customer.id, customer))
  }

  function remover(id: number) {
    if (id !== 0) {
      dispatch(removeCustomer(id))
      dispatch(setStateModalConfirmation(false))
    }
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
      <CustomModal
        isOpen={isOpenModalConfirmation}
        handleClose={handleCloseConfirmation}
        title="Atenção!"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={handleCloseConfirmation}>
              Cancelar
            </Button>
            <Button
              className="btn-default"
              onClick={() => remover(itemSelected)}
            >
              Excluir
            </Button>
          </>
        }
      >
        <p>Deseja realmente excluir este registro?</p>
      </CustomModal>
    </Main>
  )
}

export default Customers
