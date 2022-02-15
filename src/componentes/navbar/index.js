import React, {useState} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';


function Navbar (){

    const dispatch = useDispatch();

    return(
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <span className="navbar-brand " >loja</span>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <i className='fas fa-bars text-white'></i>
                  </button>
    <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link></li>

                  { 

                      useSelector(state => state.usuarioLogado) > 0 ?
                      <>
                        <li className="nav-item"><Link className="nav-link" to="/eventoCadastro">Publicar Eventos</Link></li>          
                        <li className="nav-item"><Link className="nav-link" to="">Meus Eventos</Link></li>
                         {/* <li onClick={() => dispatch('LOG_IN')}>Sair</li> */}
                         {/* <Link className="nav-item" onClick={() => dispatch('LOG_OUT')}>SAIR</Link> */}

                        <button onClick={()=>dispatch({type:'LOG_OUT'})}>SAIR</button>
                        
                    </> 
                      :
                    <>
                        <li className="nav-item"><Link className="nav-link" to="/usuarioNovo">Cadastrar</Link></li>          
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                    </> 
                }

          </ul>
        </div>
  </div>
</nav>
    )
}

export default Navbar;