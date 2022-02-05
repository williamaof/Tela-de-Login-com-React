import React from 'react';
import {BrowserRouter,Routes, Route } from'react-router-dom';




/*PAGINAS*/
import Login from './view/login';
import Usuario from './view/usuarios';
import RecuperaSenha from './view/recuperar-senha-usuario';
import Home from './view/home';
import store from '../src/store';
import { Provider } from 'react-redux';


function App(){  
        return(
            <Provider store = {store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element = {<Home/>}/>
                        <Route path="/usuarioNovo" element = {<Usuario/>}/>
                        <Route path= "/recuperaSenha" element = {<RecuperaSenha/>}/>
                        <Route path= "/login" element = {<Login/>}/>
                        
                    </Routes>
                </BrowserRouter>
                </Provider>   
        );
    }


export default App;