import React from 'react'
import Main from 'layouts/Main'
import CustomTable from 'components/customTable'
import Breadcrumbs from 'components/breadcrumbs'
import { COLUMNS } from './constants/columns'
import { Button, Col, Row } from 'reactstrap'
import useRedux from 'hooks/useRedux'
import { getCustomers } from 'redux/actions'
import { AppState } from 'redux/store'

const Customers = () => {
  const { dispatch, appSelector } = useRedux()
  const { customers } = appSelector<AppState>((state) => ({
    customers: state.Customers.customers
  }))
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
          <Button onClick={() => dispatch(getCustomers())}>Cadastrar</Button>
        </Col>
      </Row>
      <div className="container-table mt-4">
        <CustomTable columns={COLUMNS} data={customers} />
      </div>
    </Main>
  )
}

export default Customers
