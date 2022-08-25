import React from 'react'
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

const CatalogType = observer(() => {
    return (
      <div>
        <NavBar></NavBar>

        <section className="types-product">
          <div className='wrapper'>
            <div className="title-page"><h1>Каталог</h1></div>
            <div className='type'>
              <Row className="d-flex flex-row justify-around">
                <Col ml={6}>
                  <div className='type-milk'>
                    <div className='type-milk__title'>Молоко, сыр, яйцо</div>
                    <div className='type-milk__img'><Image src={milk}></Image></div>
                  </div>
                </Col>
                <Col ml={3}>
                  <div className='type-bread'>
                    <div className='type-bread__title'>Хлеб</div>
                    <div className='type-bread__img'><Image src={bread}></Image></div>
                  </div>
                </Col>
                <Col ml={3}>
                  <div className='type-vegetable-fruit'>
                    <div className='type-vegerable-fruit__title'>Овощи и фрукты</div>
                    <div className='type-vegetable-fruit__img'><Image src={fruitveg}></Image></div>
                  </div>
                </Col>
              </Row>

              <Row className="d-flex flex-row justify-between">
                <Col ml={3}>
                  <div className='type-ice-product'>
                    <div className='type-ice-product__title'>Замороженные продукты</div>
                    <div className='type-ice-product__img'><Image src={iceproduct}></Image></div>
                  </div>
                </Col>
                <Col ml={3}>
                  <div className='type-drinks'>
                    <div className='type-drinks__title'>Напитки</div>
                    <div className='type-drinks__img'><Image src={drinks}></Image></div>
                  </div>
                </Col>
                <Col ml={3}>
                  <div className='type-pastry'>
                    <div className='type-pastry__title'>Кондитерские изделия</div>
                    <div className='type-pastry__img'><Image src={pastry}></Image></div>
                  </div>
                </Col>
                <Col ml={3}>
                  <div className='type-tea-coffee'>
                    <div className='type-tea-coffee__title'>Чай, кофе</div>
                    <div className='type-tea-coffee__img'><Image src={teacoffee}></Image></div>
                  </div>
                </Col>
              </Row>
             
              <Row className="d-flex flex-row justify-around">
                <Col ml={3}>
                  <div className='type-grocery'>
                    <div className='type-grocery__title'>Бакалея</div>
                    <div className='type-grocery__img'><Image src={grocery}></Image></div>
                  </div>
                </Col>
                <Col ml={3}>
                  <div className='type-healthy-food'>
                    <div className='type-healthy-food__title'>Здоровая еда</div>
                    <div className='type-healthy-food__img'><Image src={healthy}></Image></div>
                  </div>
                </Col>
                <Col ml={6}>
                  <div className='type-zoo'>
                    <div className='type-zoo__title'>Зоотовары</div>
                    <div className='type-zoo__img'><Image src={zoo}></Image></div>
                  </div>
                </Col>
              </Row>


              <Row className="d-flex flex-row justify-around">
                <Col ml={3}>
                  <div className='type-baby-food'>
                    <div className='type-baby-food__title'>Детская еда</div>
                    <div className='type-baby-food__img'><Image src={babyfood}></Image></div>
                  </div>
                </Col>
                <Col ml={6}>
                  <div className='type-meat'>
                    <div className='type-meat__title'>Мясо, птица, колбаса</div>
                    <div className='type-meat__img'><Image src={meat}></Image></div>
                  </div>
                </Col>
                <Col ml={3}>
                  <div className='type-nonfood'>
                    <div className='type-nonfood__title'>Непродовольственные товары</div>
                    <div className='type-nonfood__img'><Image src={nonfood}></Image></div>
                  </div>
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