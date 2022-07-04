import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import imgHeader from "../img/imgHeader.jpg";
import bgHeader from "../img/bgHeader.jpg";

const Headerbg = {
  backgroundImage: 'url(' + bgHeader + ')',
};

function Main() {
  return (
    <div>
      <NavBar></NavBar>
     <Row>
      <div style={ Headerbg }>
        <Col >
          <Image src={imgHeader}></Image>
        </Col>
        
      </div>
     </Row>
        
     
      
      <ProductList></ProductList>
    </div>
  )
}

export default Main;
