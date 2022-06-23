import React from 'react'
import logo from '../img/logo.svg';
import { observer } from 'mobx-react-lite';
import Catalog from "./Catalog";
import nameStore from '../img/nameStore.svg';
import { SHOP_ROUTE } from '../utils/consts';


const NavBar = () => {
  return (
    <div className='navbar'>
        <div to={SHOP_ROUTE}>
          <div className='navbar-logo'><img src={logo} alt="logo"></img></div>
          <div className='navbar-nameStore'><img src={nameStore} alt="logo"></img></div>
        </div>

        <Catalog></Catalog>

     </div>   
  )
}

export default NavBar;