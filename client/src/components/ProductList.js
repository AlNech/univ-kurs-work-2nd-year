import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import {Context} from "../index";
import ProductItem from './ProductItem';

const ProductList = observer(
    () => {
        const {product} = useContext(Context);
        
        
       
    
        return (
            <div className="d-flex flex-row justify-content-between flex-wrap">
                {product.products.map(product => {
                    return <ProductItem key = {product.id} product={ product }/>
                })}
            </div>
        )
    }
) 

export default ProductList; 