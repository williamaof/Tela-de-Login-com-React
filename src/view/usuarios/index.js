import React, { useState } from 'react';
import './usuarios.css';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Usuario_novo(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, SetCarregando] = useState();

    function cadastrar(){
        SetCarregando(1);

        setMsgTipo(null);

        if(!email || !senha ){
            setMsgTipo('erro')
            setMsg(' Informe usuário e senha!')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado =>{
            SetCarregando(0);
            setMsgTipo('sucesso')
        }).catch(erro =>{
            SetCarregando(0);
            setMsgTipo('erro')
            switch(erro.message)
            {
                case 'Password should be at least 6 characters':
                    setMsg(' - A senha deve ter no mínimo 6 caracteres!');
                    break;

               case 'The email address is already in use by another account.':
                    setMsg(' - Este email já está cadastrado!');
                    break;
                   
                case 'The email address is badly formatted.' :  
                    setMsg(' - O formato do email está inválido');
                    break;
                default:
                    setMsg(' - Não foi possível cadastrar, tente mais tarde!');
                    break;    

            }    
        })
    }

    return(
        <div className="form-cadastro">

            <form className='text-center form-login mx-auto mt-5'>
                <h3 className='mb-3 text-black fw-bold'>Cadastro de Usuário</h3>

                <input onChange={(e) => setEmail (e.target.value)} type='email' className='form-control my-2' placeholder='Email'></input>
                <input onChange={(e) => setSenha (e.target.value)} type= "password" className='form-control my-2' placeholder='Senha '></input>
              
                {
                
                    carregando ? <div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div>   
                    :<button onClick={cadastrar} type = 'button' className='btn btn-lg btn-block mt-3 mg-5 btn-cadastro'>Cadastrar</button>
                }

                <div>
                 <Link to = "/"  > <i className="fas fa-undo mt-5 fa-3x"></i> </Link>
                </div>
                
                <div className='MSN-login mt-3 text-center '>
                {msgTipo === 'sucesso' && <span className='text-success fw-bold' >&#10004; Cadastrado com sucesso </span>}
                {msgTipo === 'erro' && <span className='text-danger fw-bold'>&#10006;{msg}</span>}
              </div>

            </form>
        </div>
    )
}
export default Usuario_novo;