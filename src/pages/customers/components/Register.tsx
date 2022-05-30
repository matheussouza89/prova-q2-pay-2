import React from 'react'
import useRedux from 'hooks/useRedux'
import { CustomersData } from 'models/types'
import { Col, Form, Input, Label, Row } from 'reactstrap'
import { setCustomer } from 'redux/actions'

interface RegisterProps {
  data?: CustomersData
}

const Register = ({ data }: RegisterProps) => {
  const { dispatch } = useRedux()

  function onChange(value: string | number, field: string) {
    dispatch(setCustomer(value, field))
  }

  return (
    <Form>
      <Row className="d-flex row-gap-10">
        <Col md={4}>
          <Label>CPF/CNPJ</Label>
          <Input
            onChange={(e) => {
              onChange(e.target.value, 'document')
            }}
            value={data?.document}
            type="text"
            placeholder="Digite aqui"
          />
        </Col>
        <Col md={4}>
          <Label>Nome</Label>
          <Input
            onChange={(e) => {
              onChange(e.target.value, 'name')
            }}
            value={data?.name}
            type="text"
            placeholder="Digite aqui"
          />
        </Col>
        <Col md={4}>
          <Label>Código</Label>
          <Input
            onChange={(e) => {
              onChange(e.target.value, 'bank.code')
            }}
            value={data?.bank.code}
            type="text"
            placeholder="Digite aqui"
          />
        </Col>
        <Col md={4}>
          <Label>Banco</Label>
          <Input
            onChange={(e) => {
              onChange(e.target.value, 'bank.bankName')
            }}
            value={data?.bank?.bankName}
            type="text"
            placeholder="Digite aqui"
          />
        </Col>
        <Col md={4}>
          <Label>Agência</Label>
          <Input
            onChange={(e) => {
              onChange(e.target.value, 'bank.agency')
            }}
            value={data?.bank?.agency}
            type="text"
            placeholder="Digite aqui"
          />
        </Col>
        <Col md={4}>
          <Label>Conta</Label>
          <Input
            onChange={(e) => {
              onChange(e.target.value, 'bank.account')
            }}
            value={data?.bank?.account}
            type="text"
            placeholder="Digite aqui"
          />
        </Col>
      </Row>
    </Form>
  )
}

export default Register
