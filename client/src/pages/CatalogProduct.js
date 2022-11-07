import React, {useContext, useEffect} from 'react'
import { observer } from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import NavBar from '../components/NavBar';
import {Col, Row} from "react-bootstrap"
import { Context } from '..';
import { fetchTypes, fetchBrands, fetchProduct} from '../http/productApi';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';


const CatalogProduct = observer(() => {
  const {product} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrands(data))
    fetchProduct(null, null, 1, 10).then(data => {
      product.setProduct(data.rows)
  })
  }, [])
  

    return (
      <div>
        <NavBar></NavBar>

        <section className='list-product'>
          <div className="wrapper">
            <Row>
              <Col md={5} className='list-product__title'>
                  <h2>Молоко, сыр, яйцо</h2>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 9, offset: 3 }}>
                  <ProductList/> 
                  {/*page brands*/}  
              </Col>
            </Row>
            
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
  ) 

export default CatalogProduct