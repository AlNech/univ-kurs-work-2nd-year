import React, {useContext, useEffect} from 'react'
import { observer } from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import NavBar from '../components/NavBar';
import {Col, Row} from "react-bootstrap"
import { Context } from '..';
import { fetchTypes, fetchBrands, fetchProduct} from '../http/productApi';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Pages from '../components/Pages';

const CatalogProduct = observer(() => {
  const {product} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrands(data))
    fetchProduct(null, null, 1, 10).then(data => {
      product.setProduct(data.rows)
  })
  }, [])
  
  useEffect(() => {
    fetchProduct(product.selectedType.id, product.selectedBrand.id, product.page, 2).then(data => {
          product.setProduct(data.rows)
          product.setTotalCount(data.count)
      })
  }, [product.page, product.selectedType, product.selectedBrand,])

    return (
      <div>
        <NavBar></NavBar>

        <section className='list-product'>
          <div className="wrapper">
            <Row>
              <Col md={5} className='list-product__title'>
                  <h2>{product.selectedType.name}</h2>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 9, offset: 3 }}>
                  <ProductList/> 
                  <Pages/> 
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