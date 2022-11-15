import React, {useContext} from 'react'
import logo from '../img/logo.svg';
import { observer } from 'mobx-react-lite';
import {Context} from "../index"
import nameStore from '../img/nameStore.svg';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import TypeBar from './TypeBar';

const NavBar = observer(() => {
  const {user} = useContext(Context);
  const history = useNavigate();

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <div className='navbar d-flex flex-row flex-nowrap'>
        <div onClick={() => history(SHOP_ROUTE)} className='d-flex flex-row col-md-2'>
          <div className='navbar-nameStore me-md-2'><img src={nameStore} alt="logo"></img></div>
          <div className='navbar-logo'><img src={logo} alt="logo"></img></div>
        </div>
        <TypeBar></TypeBar>
        {user.isAuth ? 
            <div className='menu d-flex flex-row '>
              <button className='menu-admin' onClick={() => history(ADMIN_ROUTE)}>Админ панель</button>
              <button className='menu-auth' onClick={() => logOut()}>Выйти</button>
            </div> 
            :
            <div className='menu'>             
              <button className='menu-auth' onClick={() => {history(LOGIN_ROUTE)}}>Вход/Регистрация</button>
            </div> 
        }
     </div>   
  )
}) 

export default NavBar;