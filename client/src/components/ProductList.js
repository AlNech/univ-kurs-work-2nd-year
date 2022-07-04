import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import {Context} from "../index";
import ProductItem from './ProductItem';


const ProductList = () => {
    const {product} = useContext(Context);


    return (
        <Row className-="d-flex flex-row">
            {product.products.map(product => {
                return <ProductItem  key = {product.id} product={ product }/>
            })}
        </Row>
    )
}

export default ProductList; 