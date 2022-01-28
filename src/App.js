import React from 'react';
import {BrowserRouter,Routes, Route } from'react-router-dom';




/*PAGINAS*/
import Login from './view/login';
import Usuario from './view/usuarios';
import RecuperaSenha from './view/recuperar-senha-usuario';
import Home from './view/home';


function App(){  
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Login/>}/>
                    <Route path="/usuarioNovo" element = {<Usuario/>}/>
                    <Route path= "/recuperaSenha" element = {<RecuperaSenha/>}/>
                    <Route path= "/home" element = {<Home/>}/>
                    
                </Routes>
            </BrowserRouter>
        );
    }


export default App;