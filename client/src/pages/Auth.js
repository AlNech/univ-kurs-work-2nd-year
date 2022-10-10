import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { Card, Row, Nav, Col, Button, Form, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBarAuth from '../components/NavBarAuth';
import { Context } from "../index";
import {login, registration} from "../http/userApi.js";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            history(SHOP_ROUTE);
        } catch (e) {
            console.log(e.response.data.message);
        }

    }
  
  return (
    <div>
      <NavBarAuth></NavBarAuth>

      <Container>
        <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <Row>
          <Card>
            <Form>
            <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
            />
            <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />


              <Row className="d-flex">
                <Button variant={"outline-success"} onClick={click}>
                      {isLogin ? 'Вход' : 'Регистрация'}          
                </Button>

                {isLogin ? 
                <div className="d-flex flex-row justify-content-around">
                  <Col md={2} offset={5}><Nav.Link href={REGISTRATION_ROUTE}>Регистрация</Nav.Link></Col>
                  <Col md={2} offset={3}><p>Забыли пароль?</p></Col>
                </div> : 
                <div>
                  <Col mg={2}><Nav.Link href={LOGIN_ROUTE}>Вход</Nav.Link></Col>
                </div>}

              </Row>   


                   
            </Form>
          </Card>
        </Row>
        
      </Container>
      
    </div>
  )
})


export default Auth;