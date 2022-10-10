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
           

        </div>
    )
})

export default Catalog