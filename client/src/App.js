import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from './components/AppRouter';
import {useContext, useState, useEffect} from "react";
import { Context } from './index.js';
import { Spinner } from 'react-bootstrap'; 
import { check } from './http/userApi';

const App = observer(() => {
   

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
