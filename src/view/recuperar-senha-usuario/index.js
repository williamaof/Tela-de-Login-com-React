import React, {useState} from 'react';
import './recuperar-senha.css';
import { Link } from 'react-router-dom';

 import firebase from '../../config/firebase';
 import 'firebase/auth';

 import Navbar from '../../componentes/navbar';

function UsuarioRecupera(){

        const [email, setEmail] = useState();
        const [msg, setMsg] = useState();

    function RecuperaSenha(){

        firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
            setMsg('Um Link foi enviado para seu email para redefini a senha!');
            }).catch(erro =>{
                setMsg('E-mail inválido, verifique!');
            })
    }

    return(
        <>

            <Navbar/>

            <form className='text-center form-login mx-auto mt-5'>
                <h3 className='mb-3 fw-bold'>Recupera Senha</h3>
                 <input onChange={(e)=> setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='Informe o E-mail que deseja recuperar a senha'></input>   

                <div className='msg my-4 text-center'>
                    <span>{msg}</span>
                </div>
                    <button onClick={RecuperaSenha} type='button' className="btn  btn-lg btn-block btn-enviar">Recupera Senha</button>
                 <div>
                 <Link to = "/"  > <i className="fas fa-undo mt-5 fa-3x"></i> </Link>
                 </div>
            </form>
            </>    
    )
}

export default UsuarioRecupera;