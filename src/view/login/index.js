import React, {useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login (){
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  function logar(){
       //salvar email e senha no Firebase
       
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado =>{
      setMsgTipo('sucesso')
    }).catch(erro =>{
      setMsgTipo('erro')
    });
  }

    return(
      <div className = "login-content d-flex align-items-center">
          <form className = "form-signin mx-auto">
              <h1 className="h3 mb-3  fw-bold text-center">Tela de Login</h1>

              
                <input onChange={(e) => setEmail (e.target.value)} type="email" class="form-control my-2"  id="floatingInput" placeholder="name@example.com"/>
                <input onChange={(e) => setSenha (e.target.value)} type="password" class="form-control my-2" id="floatingPassword" placeholder="Password"/>
                
              <button onClick={logar} className="w-100 btn btn-lg " type="button">Entrar</button>

              <div className='MSN-login mt-3 text-center '>
                {msgTipo === 'sucesso' && <span className='text-success fw-bold' >&#10004; Logado com sucesso </span>}
                {msgTipo === 'erro' && <span className='text-danger fw-bold'>&#10006; Usuário ou Senha inválidos </span>}
              </div>

                <div className="opcoe-login mt-3">
                  <Link to='usuarioNovo' className="mx-2 fw-bold"> Cadastrar-se</Link>
                  <span>&#8739;</span>
                  <Link to = "recuperaSenha" className="mx-2 fw-bold"> Recupera Senha</Link>   
                </div>
        </form>
     </div>
    )
}

export default Login;