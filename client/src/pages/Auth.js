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
            user.setUser(user);
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
        <h2 style={{marginBottom: '40px'}}>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <Row className='col-md-5'>
          <Card>
            <Form className="my-md-5">
            <Form.Control
                        className="col-md-3 my-md-1"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
            />
            <Form.Control
                        className="col-md-3 my-md-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />


              <Row className="d-flex my-md-4">
                <Button variant={"outline-success"} onClick={click} className='col-md-6 offset-3'>
                      {isLogin ? 'Вход' : 'Регистрация'}          
                </Button>

                {isLogin ? 
                <div className="d-flex flex-row justify-content-between">
                  <div><Nav.Link href={REGISTRATION_ROUTE}>Регистрация</Nav.Link></div>
                  <div className='my-md-2'><p>Забыли пароль?</p></div>
                </div> : 
                <div>
                  <div className='me-md-2' ><Nav.Link href={LOGIN_ROUTE}>Вход</Nav.Link></div>
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