import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import React, { useContext } from 'react';
import { Context } from '../index.js';
import { Dropdown, ListGroup } from 'react-bootstrap';
import { NavLink, NavItem } from 'react-bootstrap';


const Catalog = observer (() => {
    const {product} = useContext(Context);
     return (
        <div>
             <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Каталог</Dropdown.Toggle>
            <Dropdown.Menu>
                {product.types.map( (type) => { 
                        return <Dropdown.Item
                        style = {{cursor: 'pointer'}}
                        active = {type.id === product.selectedType.id}  
                        onClick={() => product.setSelectedType(type)} key = {type.id}>
                            {type.name}
                        </Dropdown.Item>
                    })}
            </Dropdown.Menu>
            </Dropdown> 

        </div>
    )
})

export default Catalog