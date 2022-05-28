import React from 'react'
import { Button, Col, Input, Row } from 'reactstrap'
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import logo from 'assets/img/login.png'

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="content-login">
        <Row>
          <Col xl={6}>
            <div className="illustration">
              <img src={logo} />
            </div>
          </Col>
          <Col xl={6}>
            <div className="form-login">
              <h1>Faça seu login</h1>
              <Input type="text" placeholder="E-mail" />
              <Input type="text" placeholder="Senha" />
              <Button className="btn-login w-100">ENTRAR</Button>
              <a href="#" className="forgot-link">
                Esqueci minha senha
              </a>
              <Button className="btn-facebook">
                <AiFillFacebook /> Continuar com Facebook
              </Button>
              <Button className="btn-google">
                <FcGoogle /> Continuar com Google
              </Button>
              <a href="#" className="signin-link">
                Ainda não tem cadastro? Inscreva-se aqui
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login
