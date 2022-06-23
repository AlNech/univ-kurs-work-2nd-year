import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import {Context} from "../index";
import ProductItem from './ProductItem';


const ProductList = () => {
    const {product} = useContext(Context);


    return (
        <div>
            {product.products.map(product => {
                return <ProductItem key = {product.id} product={ product }/>
            })}
        </div>
    )
}

export default ProductList; 