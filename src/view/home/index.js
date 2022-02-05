import React, {useState} from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar  from '../../componentes/navbar';
import {useSelector} from 'react-redux';


function Home(){

    

    return(
        <>
        <Navbar/>
        
       <div>
           <h1>Página Home</h1>
           <h1>{useSelector(state => state.usuarioEmail)}</h1>
           <h1> Logado: {useSelector(state => state.usuarioLogado)}</h1>
       </div>
        
        </>

    )
        
}

export default Home;