import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import imgHeader from "../img/imgHeader.png";
import imgPropose1 from "../img/special-propose-one.svg";
import imgPropose2 from "../img/special-propose-two.svg";



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
            <Col md={6} className="special-propose_box-1 d-flex flex-row justify-content-between" style={ {width: 584, height: 200} }>
                <div className='special-propose_box-content'>
                  <h3>Оформите карту «Северяночка»</h3>
                  <p className='special-propose_box-content-text'>И получайте бонусы при покупке в магазинах и на сайте</p>
                </div>
                <div className="special-propose_box-img">
                  <Image style={ {width: 206, height: 138} } src={imgPropose1}></Image>
                  </div>
            </Col>
            <Col md={6} className="special-propose_box-2 d-flex flex-row" style={ {width: 584, height: 200} }>
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
      
      
    </div>
  )
}

export default Main;
