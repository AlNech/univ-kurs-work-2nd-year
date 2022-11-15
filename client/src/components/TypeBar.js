import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import menu from '../img/menu.png';
import {useNavigate} from "react-router-dom";
import { CATALOG_PRODUCT, CATALOG_TYPE } from '../utils/consts';


const TypeBar = observer(() => {
    const {product} = useContext(Context)
    const history = useNavigate();
    
    return (
        <div className='typebar' onClick={() => {history(CATALOG_TYPE);}}>
            
            <ul>
                <li>
                    
                    <div className='d-flex flex-row justify-content-between'>
                            <img src={menu} alt='burg-menu' className='typebar_img'></img>
                            <p className='typebar_name'>Каталог</p>
                    </div>
                    <ul className='typebar_list'>
                    
                    {product.types.map(type =>
                                    <li className='typebar_item'
                                        style={{cursor: 'pointer'}}
                                        active={type.id === product.selectedType.id}
                                        onClick={() => {product.setSelectedType(type); history(CATALOG_PRODUCT);}}
                                        key={type.id}
                                    >
                                        {type.name}
                                        <br/>
                                    </li>
                    )}
                        
                    </ul>
                </li>
            </ul>
        </div>


    )
        
});

export default TypeBar;