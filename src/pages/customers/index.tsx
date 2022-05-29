import React from 'react'
import Main from 'layouts/Main'
import CustomTable from 'components/customTable'
import Breadcrumbs from 'components/breadcrumbs'
import { COLUMNS } from './constants/columns'
import { DATA } from './constants/data'
import { Button, Col, Row } from 'reactstrap'

const Customers = () => {
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
          <Button>Cadastrar</Button>
        </Col>
      </Row>
      <div className="container-table mt-4">
        <CustomTable columns={COLUMNS} data={DATA} />
      </div>
    </Main>
  )
}

export default Customers
