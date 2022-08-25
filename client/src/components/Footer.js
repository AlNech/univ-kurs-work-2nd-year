import React from 'react'
import {Nav, Image, Col, Row} from 'react-bootstrap';
import logo_footer from "../img/logo_footer.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <Row className="d-flex flex-row">
          <Col md={1}>
            <Image src={logo_footer}></Image>
          </Col>

          <Col md={7}>
            <Nav>
              <Nav.Item>О компании</Nav.Item>
              <Nav.Item>Контакты</Nav.Item>
              <Nav.Item>Вакансии</Nav.Item>
              <Nav.Item>Статьи</Nav.Item>
              <Nav.Item>Политика обработки персональных данных</Nav.Item>
            </Nav>
          </Col>

          <Col md={2}>
            <Nav>
              <Nav.Item>d<Image></Image></Nav.Item>
              <Nav.Item>d<Image></Image></Nav.Item>
              <Nav.Item>d<Image></Image></Nav.Item>
              <Nav.Item>d<Image></Image></Nav.Item>
            </Nav>
          </Col>
          <Col md={1}><a href="/">88007773333</a></Col>
          
        </Row>


      </div>
    </footer>
  )
}

export default Footer