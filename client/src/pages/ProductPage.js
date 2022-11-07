import React, {useState} from 'react'
import {Card, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Context } from '..';
import { useEffect, useContext } from 'react';
import {useParams} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {fetchTypes, fetchOneProduct} from "../http/productApi";
import TypeBar from '../components/TypeBar';
import Footer from '../components/Footer';
import shopping_cart from '../img/shopping-cart.png';

const ProductPage = observer(() => {
    const [product, setProduct] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <section className='product_id'>
                <div className='wrapper'>
                    <Col md={10} className='product_id__title'>
                        <h3>{product.name}</h3>
                    </Col>
                    <Row className='product_id__info d-flex flex-row' >
                        <Col md={{span:5, offset:1}} className='product_id__img me-md-5'>
                            <Image src={process.env.REACT_APP_API_URL + product.img}></Image>
                        </Col>
                        <Col md={{span:4}} className='product_id__info ms-md-5'>
                            <div className="price-line d-flex justify-content-end"><h2>{product.price} ₽</h2></div>
                            <div className="button-basket "><button className='col-md-12'><img src={shopping_cart} alt='cart-img'></img><span>В корзину</span></button></div>
                            <div className="desription col-md-12">
                                    {product.info.map((info, index) =>
                                                <Row key={info.id} style={{background: index % 2 === 0 ? '#F3F2F1' : '#FBF8EC', }}>
                                                    <div className='info d-flex flex-row'>
                                                        <div className='info_title'>{info.title}</div>
                                                        <div className='info_description'> {info.description}</div>
                                                    </div>
                                                    
                                                </Row>
                                            )}
                                </div>
                                </Col>
                        </Row>
                </div>
            </section>
            
            <Footer/>

        </div>
    )
})

export default ProductPage