import React, {useContext, useNavigate} from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import { observer } from 'mobx-react-lite'
import bread from '../img/types-product/bread.png'; 
import milk from '../img/types-product/milk.png'; 
import fruitveg from '../img/types-product/fruit-veg.png'; 
import Footer from '../components/Footer';
import drinks from '../img/types-product/drinks.png';
import babyfood from '../img/types-product/baby-food.png';
import grocery from '../img/types-product/grocery.png';
import meat from '../img/types-product/meat.png';
import nonfood from '../img/types-product/nonfood.png';
import zoo from '../img/types-product/zoo.png';
import pastry from '../img/types-product/pastry.png';
import teacoffee from '../img/types-product/tea-coffee.png';
import iceproduct from '../img/types-product/ice-product.png';
import healthy from '../img/types-product/healthy.png';
import { CATALOG_PRODUCT } from '../utils/consts';
import { Context } from '..';


const CatalogType = observer(() => {
  const {product} = useContext(Context);
  const history = useNavigate();


    return (
      <div>
        <NavBar></NavBar>

        <section className="types-product">
          <div className='wrapper'>
            <div className="title-page"><h2>Каталог</h2></div>
            <div className='type'>
              <Row className="d-flex flex-row justify-content-between my-md-4">
                <Col className='type-card col-md-6 me-md-5' 
                  //onClick={() => {  product.setSelectedType(type); history(CATALOG_PRODUCT);}}
                
                
                >
                    <div className='type__title'><h4>Молоко, сыр, яйцо</h4></div>
                    <div className='type__img '><Image src={milk}></Image></div>
                </Col>
                <Col className='type-card me-md-5'
                  //onClick={() => {  product.setSelectedType(type); history(CATALOG_PRODUCT);}}
                
                >
                    <div className='type__title'><h4>Хлеб</h4></div>
                    <div className='type__img'><Image src={bread}></Image></div>
                </Col>
                <Col className='type-card'
                     // onClick={() => { let type=''; product.setSelectedType(type); history(CATALOG_PRODUCT);}}
                
                >
                    <div className='type__title'><h4>Овощи и фрукты</h4></div>
                    <div className='type__img'><Image src={fruitveg}></Image></div>
                </Col>
              </Row>

              <Row className="d-flex flex-row justify-content-between my-md-4">
                <Col  className='type-card me-md-5 '>
                    <div className='type__title'><h4>Замороженные продукты</h4></div>
                    <div className='type__img'><Image src={iceproduct}></Image></div>
                </Col>
                <Col  className='type-card me-md-5'>
                    <div className='type__title'><h4>Напитки</h4></div>
                    <div className='type__img'><Image src={drinks}></Image></div>
                </Col>
                <Col className='type-card me-md-5'>
                    <div className='type__title'><h4>Кондитерские изделия</h4></div>
                    <div className='type__img'><Image src={pastry}></Image></div>
                </Col>
                <Col className='type-card'>
                    <div className='type__title'><h4>Чай, кофе</h4></div>
                    <div className='type__img'><Image src={teacoffee}></Image></div>
                </Col>
              </Row>
             
              <Row className="d-flex flex-row justify-around my-md-4">
                <Col className='type-card me-md-5'>
                    <div className='type__title'><h4>Бакалея</h4></div>
                    <div className='type__img'><Image src={grocery}></Image></div>
                </Col>
                <Col className='type-card me-md-5'>
                    <div className='type__title'><h4>Здоровая еда</h4></div>
                    <div className='type__img'><Image src={healthy}></Image></div>
                </Col>
                <Col className='type-card col-md-6 ml-md-3'>
                    <div className='type__title'><h4>Зоотовары</h4></div>
                    <div className='type__img'><Image src={zoo}></Image></div>
                </Col>
              </Row>


              <Row className="d-flex flex-row justify-around my-md-4">
                <Col ml={3} className='type-card me-md-5'>
                    <div className='type__title'><h4>Детская еда</h4></div>
                    <div className='type__img'><Image src={babyfood}></Image></div>

                </Col>
                <Col ml={6} className='type-card me-md-5'>
                    <div className='type__title'><h4>Мясо, птица, колбаса</h4></div>
                    <div className='type__img'><Image src={meat}></Image></div>
                </Col>
                <Col ml={3} className='type-card'>
                    <div className='type__title'><h4>Непродовольственные товары</h4></div>
                    <div className='type__img'><Image src={nonfood}></Image></div>
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