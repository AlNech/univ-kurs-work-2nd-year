import React, {useState} from 'react'
import {Card, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Context } from '..';
import { useEffect, useContext } from 'react';
import {useParams} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {fetchTypes, fetchOneProduct} from "../http/productApi";
import TypeBar from '../components/TypeBar';

const ProductPage = observer(() => {
    const [product, setProduct] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <Col md={9}>
                {product.name}
            </Col>
            <Col md={5}>
                <Image width={504} height={496} src={process.env.REACT_APP_API_URL + product.img}></Image>
            </Col>
            <Col md={4}>
                <div className="price-line">{product.price}</div>
                <div className="button-basket"><button>В корзину</button></div>
                <div className="desription">
                    <Card>
                    <h1>Характеристики</h1>
                     
                                {product.info.map((info, index) =>
                                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                        {info.title}: {info.description}
                                    </Row>
                                )}
                                
                             
                            
                       
                    </Card>
                </div>
            </Col>
            

        </div>
    )
})

export default ProductPage