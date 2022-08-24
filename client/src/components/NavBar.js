import React, {useContext} from 'react'
import logo from '../img/logo.svg';
import { observer } from 'mobx-react-lite';
import Catalog from "./Catalog";
import {Context} from "../index"
import nameStore from '../img/nameStore.svg';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
  const {user} = useContext(Context);
  const history = useNavigate();

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <div className='navbar'>
        <div to={SHOP_ROUTE}>
          <div className='navbar-logo'><img src={logo} alt="logo"></img></div>
          <div className='navbar-nameStore'><img src={nameStore} alt="logo"></img></div>
        </div>

        <Catalog></Catalog>
        {user.isAuth ? 
            <div className='menu'>
              <button className='menu-admin' onClick={() => history(ADMIN_ROUTE)}>Админ панель</button>
              <button className='menu-auth' onClick={() => logOut()}>Выйти</button>
            </div> 
            :
            <div className='menu'>             
              <button className='menu-auth' onClick={() => {history(LOGIN_ROUTE)}}>Авторизация</button>
            </div> 
        }
     </div>   
  )
}) 

export default NavBar;