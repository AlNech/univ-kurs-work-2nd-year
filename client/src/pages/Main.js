import React, {useContext, useEffect} from 'react'
import { Image, Row, Col, Nav, Card, CardGroup, Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import imgHeader from "../img/imgHeader.png";
import imgPropose1 from "../img/special-propose-one.svg";
import imgPropose2 from "../img/special-propose-two.svg";
import article_1 from '../img/articles/article_1.png';
import article_2 from '../img/articles/article_2.png';
import article_3 from '../img/articles/article_3.png';
import map from "../img/map.svg";
import Footer from '../components/Footer';
import ProductListExample from '../components/ProductListExample';
import { Context } from '..';
import { fetchTypes, fetchBrands, fetchProduct} from '../http/productApi';


function Main() {
  const {product} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrands(data))
    fetchProduct(null, null, 1, 4).then(data => {
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

      <header className="header">
          <div className="wrapper">
            <Row > 
                <div className="head-info">
                  <Col md={4} className="head-info__img d-flex justify-content-end">
                    <Image src={imgHeader}></Image>
                  </Col>
                  <Col md={8} className="head-info__title"><h1>Доставка бесплатно от 1000 ₽</h1></Col>
                </div>
              </Row>
          </div>
      </header>
     

     <section className="sale-line">
        <div className="wrapper">
            <div className="sale-line__title"><h2>Акции</h2></div>
            <Row>
              <ProductListExample style="d-flex flex-row justify-content-between"></ProductListExample>
            </Row>
        </div>
     </section>

     <section className="new-line">
        <div className="wrapper">
            <div className="new-line__title"><h2>Новинки</h2></div>
            <Row>
              <ProductListExample ></ProductListExample>
            </Row>
        </div>
     </section>
        
     <section className="special-propose">
        <div className="wrapper">
          <div className="special-propose__title"><h2>Специальные предложения</h2></div>
          <Row className="d-flex flex-row wrapper nowrap justify-content-between ">
            <Col  className="special-propose_box-1 d-flex flex-row justify-content-between me-md-5"  >           
                <div className='special-propose_box1-content '>
                  <h3>Оформите карту «Северяночка»</h3>
                  <p className='special-propose_box1-content-text'>И получайте бонусы при покупке в магазинах и на сайте</p>
                </div>
                <div className="special-propose_box1-img">
                  <Image src={imgPropose1}></Image>
                </div>
            </Col>
            <Col className="special-propose_box-2 d-flex flex-row" >
                <div className='special-propose_box2-content '>
                    <h3>Покупайте акционные товары</h3>
                    <p className='special-propose_box2-content-text'>И получайте вдвое больше бонусов</p>
                </div>
                <div className="special-propose_box2-img">
                  <Image src={imgPropose2}></Image>
                </div>
            </Col>
          </Row>
        </div>
     </section>
      



     <section className="map">
        <div className="wrapper">
          <div className='map-title'><h2>Наши магазины</h2></div>

          <div  className='col-md-3 map-places d-flex flex-row justify-content-between '>
            <div className='map-place_cross'>
              п.Щельяюр
            </div>
            <div className='map-place_cross'>
            д.Вертеп
            </div>
            <div className='map-place_cross'>
            с.Краснобор
            </div>
            <div className='map-place_cross'>
            д.Диюр
            </div>
          </div>
          
        <Col md={12}><img width='100%' src={map} alt='map'></img></Col>


        </div>
     </section>
      

    <section className="article">
      <div className="wrapper">
        <div classNmae='article_title'><h2>Статьи</h2></div>


        <div className="link-article d-flex flex-row justify-content-between">

          <div className='link-article-card me-md-3'>
            <div className="link-article-card_img"><img src={article_1} alt='img_article'></img></div>
            <small className="text-muted">15.07.2019</small>
            <div className='link-article-card_body'>
              
              <div className='link-article-card_title'><p>Режим использования масок и перчаток на территории магазинов</p></div>
              <div className='link-article-card_text'><p>Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p></div>
              <div className='link-article-card_button col-md-5'><a>Подробнее</a></div>
            </div>
          </div>
          
         
          <div className='link-article-card me-md-3'>
            <div className="link-article-card_img"><img src={article_2} alt='img_article'></img></div>
            <small className="text-muted">15.07.2019</small>
            <div className='link-article-card_body'>
                
                <div className='link-article-card_title'><p className='col-md-8'>Весеннее настроение для каждой</p></div>
                <div className='link-article-card_text'><p>8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.</p></div>
                <div className='link-article-card_button col-md-5'><a>Подробнее</a></div>
            </div>
           
          </div>
          


          <div className='link-article-card'>
            <div className="link-article-card_img"><img src={article_3} art='img_article'></img></div>
            <small className="text-muted">15.07.2019</small>
            <div className='link-article-card_body'>
              
              <div className='link-article-card_title'><p>ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</p></div>
              <div className='link-article-card_text'><p>Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!</p></div>
              <div className='link-article-card_button col-md-5'><a>Подробнее</a></div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>


    <Footer></Footer>
    </div>
  )
}

export default Main;
