import React from 'react';
import {Col, Card, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { PRODUCT_ROUTE } from '../utils/consts';

function ProductItem({product}) {
    const history = useNavigate();

    return (
        <div className="d-flex col-md-3">
            <Col onClick={() => history(PRODUCT_ROUTE + '/' + product.id)}>
                <Card style={{cursor:'pointer', width: 275}} border={"light"}>
                    <Image width={275} height={160} src={product.img}></Image>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <div className='price-card'>{product.price}</div>
                        <div className='name-card'>{product.name}</div>
                        <div className='rating-card'>{product.rating}</div>
                        <div className='button-card'><button>В корзину</button></div>
                    </div>               
                </Card>    
            </Col>
        </div>
    )
}

export default ProductItem