import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import imgHeader from "../img/imgHeader.png";



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
              <ProductList ></ProductList>
            </Row>
        </div>
     </section>
        
     
      
      
    </div>
  )
}

export default Main;
