import React from 'react';
import {Col, Image} from "react-bootstrap";


function ProductItem({product}) {
  return (
    <div>
        <Col md={3}>
            <Image ></Image>
            <div>{product.name}</div>
        </Col>
    </div>
  )
}

export default ProductItem