import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import {Context} from "../index";
import ProductItem from './ProductItem';
import {useNavigate, useLocation} from "react-router-dom";

const ProductList = observer(
    () => {
        const {product} = useContext(Context);
        
        
       
    
        return (
            <div className="d-flex flex-row justify-content-between">
                {product.products.map(product => {
                    return <ProductItem key = {product.id} product={ product }/>
                })}
            </div>
        )
    }
) 

export default ProductList; 