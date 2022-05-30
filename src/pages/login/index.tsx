import React from 'react'
import { Button, Col, Input, Row } from 'reactstrap'
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import logo from 'assets/img/login.png'
import useRedux from 'hooks/useRedux'
import { setLogin, loginSystem } from 'redux/actions'
import { register } from 'helpers/api/auth'

const Login = () => {
  const { dispatch, appSelector } = useRedux()

  const { login } = appSelector((state) => ({
    login: state.Auth.login
  }))

  function onChange(value: string, field: string) {
    dispatch(setLogin(value, field))
  }

  function logar() {
    dispatch(loginSystem(login))
  }

  return (
    <div className="bg-login">
      <div className="content-login">
        <Row>
          <Col lg={6}>
            <div className="illustration">
              <img src={logo} />
              <h1 className="title">Mauris aliquam</h1>
              <span className="subtitle">Proin venenatis pellentesque</span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-login">
              <h1 className="title">Faça seu login</h1>
              <Input
                type="text"
                placeholder="E-mail"
                onChange={(e) => {
                  onChange(e.target.value, 'email')
                }}
                value={login.email}
              />
              <Input
                type="password"
                placeholder="Senha"
                onChange={(e) => {
                  onChange(e.target.value, 'password')
                }}
                value={login.senha}
              />
              <Button
                className="btn-login w-100"
                onClick={() => {
                  logar()
                }}
              >
                ENTRAR
              </Button>
              <a href="#" className="forgot-link">
                Esqueci minha senha
              </a>
              <Button className="btn-facebook">
                <AiFillFacebook /> Continuar com Facebook
              </Button>
              <Button className="btn-google">
                <FcGoogle /> Continuar com Google
              </Button>
              <a
                role="button"
                className="signin-link"
                onClick={() => {
                  register()
                }}
              >
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
