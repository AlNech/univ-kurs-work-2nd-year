import React from 'react';
import {Col, Card, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { PRODUCT_ROUTE } from '../utils/consts';

function ProductItem({product}) {
    const history = useNavigate();

    return (
        
            <Col md={3} onClick={() => history(PRODUCT_ROUTE + '/' + product.id)}>
                <Card className="card-product">
                    <Image className='card-product__img' src={process.env.REACT_APP_API_URL + product.img}></Image>
                    <div className="d-flex flex-column justify-content-between flex-start card-product__box">
                        <div className='price-card'><h4>{product.price}</h4></div>
                        <div className='name-card'><p>{product.name}</p></div>
                        <div className='button-card'><a>В корзину</a></div>
                    </div>               
                </Card>    
            </Col>
        
    )
}

export default ProductItem