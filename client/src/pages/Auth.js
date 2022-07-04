import React, { useContext } from 'react'
import { Card, Row, NavLink, Col, Button, Form, Container } from 'react-bootstrap';
import NavBarAuth from '../components/NavBarAuth';
import { Context } from "../index";
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from "../utils/consts";

export default function Auth() {
  const {user} = useContext(Context);

  return (
    <div>
      <NavBarAuth></NavBarAuth>

      <Container>
        <h2>{user.isAuth ? 'Вход' : 'Регистрация'}</h2>
        <Row>
          <Card>
            <Form>
            <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
            />
            <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        type="password"
                    />


              <Row className="d-flex">
                <Button variant={"outline-success"} >
                      {user.isAuth ? 'Вход' : 'Регистрация'}          
                </Button>

                {user.isAuth ? 
                <div className="d-flex flex-row justify-content-around">
                  <Col md={2} offset={5}><NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink></Col>
                  <Col md={2} offset={3}><p>Забыли пароль?</p></Col>
                </div> : 
                <div>
                  <Col mg={2}><NavLink to={LOGIN_ROUTE}>Вход</NavLink></Col>
                </div>}

              </Row>   


                   
            </Form>
          </Card>
        </Row>
        
      </Container>
      
    </div>
  )
}
