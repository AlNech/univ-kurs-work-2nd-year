import React from 'react'
import {Nav, Image, Col, Row} from 'react-bootstrap';
import logo_footer from "../img/logo_footer.svg";
import vk from '../img/social/vk.png';
import odn from '../img/social/odn.png';
import facebook from '../img/social/facebook.png';
import inst from '../img/social/inst.png';
import number from '../img/social/number.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <Row className="d-flex flex- footer-row">
          <Col md={1} className='footer-logo'>
            <Image src={logo_footer}></Image>
          </Col>

          <Col md={7} className='me-md-2'>
            <Nav className='d-flex flex-row justify-content-between footer-menu'>
              <Nav.Item>О компании</Nav.Item>
              <Nav.Item>Контакты</Nav.Item>
              <Nav.Item>Вакансии</Nav.Item>
              <Nav.Item>Статьи</Nav.Item>
              <Nav.Item>Политика обработки персональных данных</Nav.Item>
            </Nav>
          </Col>

          <Col md={2}>
            <Nav className='d-flex flex-row justify-content-between footer-social'>
              <Nav.Item><Image src={inst}></Image></Nav.Item>
              <Nav.Item><Image src={vk}></Image></Nav.Item>
              <Nav.Item><Image src={facebook}></Image></Nav.Item>
              <Nav.Item><Image src={odn}></Image></Nav.Item>
            </Nav>
          </Col>
          <Col md={1}><a href="/"><Image src={number}></Image></a></Col>
          
        </Row>


      </div>
    </footer>
  )
}

export default Footer