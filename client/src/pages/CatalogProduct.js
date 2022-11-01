import React, {useContext, useEffect} from 'react'
import { observer } from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import NavBar from '../components/NavBar';
import {Col} from "react-bootstrap"
import { Context } from '..';
import { fetchTypes, fetchBrands, fetchProduct} from '../http/productApi';
import ProductList from '../components/ProductList';


const CatalogProduct = observer(() => {
  const {product} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrands(data))
    fetchProduct(null, null, 1, 2).then(data => {
      product.setProduct(data.rows)
  })
  }, [])
  

    return (
      <div>
        <NavBar></NavBar>

        <section className='list-product'>
          <div className="wrapper">
            <Col md={3}>
              <TypeBar></TypeBar>
            </Col>
            <Col md={9}>
                 <ProductList/>   
             </Col>
          </div>
        </section>
      
      </div>
    )
  }
  ) 

export default CatalogProduct