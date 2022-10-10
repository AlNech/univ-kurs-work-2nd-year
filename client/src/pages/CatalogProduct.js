import React, {useContext, useEffect} from 'react'
import { observer } from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import NavBar from '../components/NavBar';
import {Col} from "react-bootstrap"
import { Context } from '..';
import { fetchTypes } from '../http/productApi';


const CatalogProduct = observer(() => {
  const {product} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
  }, [])

    return (
      <div>
        <NavBar></NavBar>

        <section className='list-product'>
          <div className="wrapper">
            <Col ml={3}>
              <TypeBar></TypeBar>
            </Col>
          </div>
        </section>
      
      </div>
    )
  }
  ) 

export default CatalogProduct