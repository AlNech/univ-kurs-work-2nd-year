import React from 'react'
import { Image, Row, Col, Nav, Card, CardGroup, Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import imgHeader from "../img/imgHeader.png";
import imgPropose1 from "../img/special-propose-one.svg";
import imgPropose2 from "../img/special-propose-two.svg";
import map from "../img/map.svg";
import Footer from '../components/Footer';

function Main() {
  return (
    <div>
      <NavBar></NavBar>

      <header className="header">
          <div className="wrapper">
            <Row > 
                <div className="head-info">
                  <Col md={3}>
                    <Image src={imgHeader}></Image>
                  </Col>
                  <Col md={8}><h1>Доставка бесплатно от 1000 ₽</h1></Col>
                </div>
              </Row>
          </div>
      </header>
     

     <section className="sale-line">
        <div className="wrapper">
            <h2>Акции</h2>
            <Row>
              <ProductList></ProductList>
            </Row>
        </div>
     </section>

     <section className="new-line">
        <div className="wrapper">
            <h2>Новинки</h2>
            <Row>
              <ProductList></ProductList>
            </Row>
        </div>
     </section>
        
     <section className="special-propose">
        <div className="wrapper">
          <h2>Специальные предложения</h2>
          <Row className="d-flex flex-row">
            <Col md={5} className="special-propose_box-1 d-flex flex-row justify-content-between"  >
                <div className='special-propose_box-content'>
                  <h3>Оформите карту «Северяночка»</h3>
                  <p className='special-propose_box-content-text'>И получайте бонусы при покупке в магазинах и на сайте</p>
                </div>
                <div className="special-propose_box-img">
                  <Image style={ {width: 206, height: 138} } src={imgPropose1}></Image>
                </div>
            </Col>
            <Col md={5} className="special-propose_box-2 d-flex flex-row" >
                <div className='special-propose_box-content'>
                    <h3>Покупайте акционные товары</h3>
                    <p>И получайте вдвое больше бонусов</p>
                </div>
                <div className="special-propose_box-img">
                  <Image src={imgPropose2}></Image>
                </div>
            </Col>
          </Row>
        </div>
     </section>
      



     <section className="map">
        <div className="wrapper">
          <h2>Наши магазины</h2>

          <Nav defaultActiveKey="link-1" as="ul">
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">п.Щельяюр</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">д.Вертеп</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3">с.Краснобор</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-4">д.Диюр</Nav.Link>
            </Nav.Item>
          </Nav>



          <Image src={map}></Image>
        </div>
     </section>
      

    <section className="article">
      <div className="wrapper">
        <h2>Статьи</h2>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <small className="text-muted">15.07.2019</small>
              <Card.Title>Режим использования масок и перчаток на территории магазинов</Card.Title>
              <Card.Text>
                Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.
              </Card.Text>
            </Card.Body>
            
              <Button>Подробнее</Button>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <small className="text-muted">15.07.2019</small>
              <Card.Title>Весеннее настроение для каждой</Card.Title>
              <Card.Text>
                8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.
              </Card.Text>
            </Card.Body>
            
              <Button>Подробнее</Button>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <small className="text-muted">15.07.2019</small>
              <Card.Title>ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</Card.Title>
              <Card.Text>
                Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!
              </Card.Text>
            </Card.Body>
            
              <Button>Подробнее</Button>
            
          </Card>
        </CardGroup>
      </div>
    </section>


    <Footer></Footer>
    </div>
  )
}

export default Main;
