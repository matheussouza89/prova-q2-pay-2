import React, { useEffect, useState } from 'react'
import Main from 'layouts/Main'
import CustomTable from 'components/customTable'
import Breadcrumbs from 'components/breadcrumbs'
import { COLUMNS } from './constants/columns'
import { Button, Col, Row } from 'reactstrap'
import useRedux from 'hooks/useRedux'
import { AppState } from 'redux/store'
import CustomModal from 'components/customModal'
import Register from './components/Register'
import { getCustomers, postCustomer, putCustomer } from 'redux/actions'

const Customers = () => {
  const { dispatch, appSelector } = useRedux()
  const { customers, customer, loadingTable } = appSelector<AppState>(
    (state) => ({
      customers: state.Customers.customers,
      customer: state.Customers.customer,
      loadingTable: state.Customers.loadingTable
    })
  )

  useEffect(() => {
    dispatch(getCustomers())
  }, [dispatch])

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
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
      <Row>
        <Col md={4}>
          <Button onClick={() => handleShow()}>Cadastrar</Button>
        </Col>
      </Row>
      <div className="container-table mt-4">
        <CustomTable
          columns={COLUMNS}
          data={customers}
          isLoading={loadingTable}
        />
      </div>
      <CustomModal
        isOpen={show}
        handleClose={handleClose}
        title="Customer"
        footer={
          <>
            <Button color="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button color="primary" onClick={() => salvar()}>
              Salvar
            </Button>
          </>
        }
      >
        <Register data={customer} />
      </CustomModal>
    </Main>
  )
}

export default Customers
