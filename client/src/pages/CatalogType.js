import React, {useContext, useEffect} from 'react';
import { fetchTypes, fetchBrands, fetchProduct} from '../http/productApi';
import { Row, Col, Image } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import { observer } from 'mobx-react-lite';
import bread from '../img/types-product/bread.png'; 
import milk from '../img/types-product/milk.png'; 
import fruitveg from '../img/types-product/fruit-veg.png'; 
import Footer from '../components/Footer';
import drinks from '../img/types-product/drinks.png';
import pastry from '../img/types-product/pastry.png';
import teacoffee from '../img/types-product/tea-coffee.png';
import iceproduct from '../img/types-product/ice-product.png';
import { CATALOG_PRODUCT } from '../utils/consts';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';


const CatalogType = observer(() => {
  const {product} = useContext(Context);
  const history = useNavigate();

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrands(data))
    fetchProduct(null, null, 1, 10).then(data => {
      product.setProduct(data.rows)
  })
  }, [])

  let types = JSON.parse(JSON.stringify(product.types))

  return (
      <div>
        <NavBar></NavBar>

        <section className="types-product">
          <div className='wrapper'>
            <div className="title-page"><h2>Каталог</h2></div>
            <div className='type'>
              <Row className="d-flex flex-row justify-content-between my-md-4">
                <Col className='type-card col-md-6 me-md-5' 
                  onClick={() => { product.setSelectedType(types[0]); history(CATALOG_PRODUCT);}}
                >
                  product
                    <div className='type__title'><h4>Молоко, сыр, яйцо</h4></div>
                    <div className='type__img '><Image src={milk}></Image></div>
                </Col>
                <Col className='type-card me-md-5'
                  onClick={() => { product.setSelectedType(types[1]); history(CATALOG_PRODUCT);}}
                
                >
                    <div className='type__title'><h4>Хлеб</h4></div>
                    <div className='type__img'><Image src={bread}></Image></div>
                </Col>
                <Col className='type-card'
                      onClick={() => { product.setSelectedType(types[2]); history(CATALOG_PRODUCT);}}
                
                >
                    <div className='type__title'><h4>Овощи и фрукты</h4></div>
                    <div className='type__img'><Image src={fruitveg}></Image></div>
                </Col>
              </Row>

              <Row className="d-flex flex-row justify-content-between my-md-4">
                <Col  className='type-card me-md-5 '
                 onClick={() => { product.setSelectedType(types[3]); history(CATALOG_PRODUCT);}}>
                    <div className='type__title'><h4>Замороженные продукты</h4></div>
                    <div className='type__img'><Image src={iceproduct}></Image></div>
                </Col>
                <Col  className='type-card me-md-5'
                 onClick={() => { product.setSelectedType(types[4]); history(CATALOG_PRODUCT);}}>
                    <div className='type__title'><h4>Напитки</h4></div>
                    <div className='type__img'><Image src={drinks}></Image></div>
                </Col>
                <Col className='type-card me-md-5'
                 onClick={() => { product.setSelectedType(types[5]); history(CATALOG_PRODUCT);}}>
                    <div className='type__title'><h4>Кондитерские изделия</h4></div>
                    <div className='type__img'><Image src={pastry}></Image></div>
                </Col>
                <Col className='type-card'
                 onClick={() => { product.setSelectedType(types[6]); history(CATALOG_PRODUCT);}}>
                    <div className='type__title'><h4>Чай, кофе</h4></div>
                    <div className='type__img'><Image src={teacoffee}></Image></div>
                </Col>
              </Row>
          </div>
          </div>
          <Footer></Footer>
        </section>
      </div>
    )
  }
)

export default CatalogType