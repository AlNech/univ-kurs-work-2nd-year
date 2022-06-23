import React, {useContext} from 'react';
import { Context } from '../index';
import logo from '../img/logo.svg';
import nameStore from '../img/nameStore.svg';
import { SHOP_ROUTE, ADMIN_ROUTE} from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

 const NavBarAuth = observer(() => {
  const {user} = useContext(Context);
  const history = useNavigate();
  return (
    <div className='navbar'>
        <div to={SHOP_ROUTE}>
          <div className='navbar-logo'><img src={logo} alt="logo"></img></div>
          <div className='navbar-nameStore'><img src={nameStore} alt="logo"></img></div>
        </div>

        
        {user.isAuth ? 
            <div className='menu'>
              <button className='menu-admin' onClick={() => history(ADMIN_ROUTE)}>Админ панель</button>
              <button className='menu-auth'>Выйти</button>
            </div> 
            :
            <div className='menu'>             
              <button className='menu-auth' onClick={() => {user.setIsAuth(true)}}>Авторизация</button>
            </div> 
        }  
    </div>
  )
})

export default NavBarAuth;