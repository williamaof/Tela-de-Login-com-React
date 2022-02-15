import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './evento-cadastro.css';
import {Link, } from 'react-router-dom';

import firebase from '../../config/firebase';
import Navbar from '../../componentes/navbar';



function EventoCadastro(){
    const [carregando, setCarregando]= useState();
    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

        function cadastrar(){
            setMsgTipo(null);
            setCarregando(1);

                storage.ref(`/imagens/${foto.name}`).put(foto).then(()=>{
                db.collection('eventos2022').add({
                    titulo: titulo,
                    tipo: tipo,
                    detalhes: detalhes,
                    data: data,
                    hora: hora,
                    usuario: usuarioEmail,
                    visualizacoes: 0,
                    foto: foto.name,
                    publico: 1,
                    criacao: new Date()

                }).then(()=>{
                    setMsgTipo('sucesso');
                    setCarregando(0);
                }).catch( erro => {
                    setMsgTipo('erro');
                    setCarregando(0);
                });
         });

            
        }

    
    return(
        <>
        <Navbar/>
        
        <div className='col-12'>
            <div className='row'>
                <h3 className="mx-auto font-weight-bold mt-5"> Novo Evento</h3>
            </div>

            <form>

                <div className='form-group'>
                    <label className='font-weight-bold'>Título</label>
                    <input input onChange={(e) => setTitulo (e.target.value)} type='text' className='form-control'></input>
                </div>


                <div className="form-group">
                    <label className='font-weight-bold'>Tipo de Evento:</label>
                    <select input onChange={(e) => setTipo (e.target.value)}  className='form-control'>
                        <option disabled selected value>--Selecione um tipo</option>
                        <option>Festa</option>
                        <option>Cursos</option>
                        <option>Shows</option>
                        <option>Diversos</option>

                    </select>
                </div>

               < div className="form-group">
                    <label className='font-weight-bold'>Descrição do Evento:</label>
                    <textarea input onChange={(e) => setDetalhes (e.target.value)} className='form-control' rows="3"/>
                </div>


                <div className='form-group row'>
                        < div className="col-6">
                            <label className='font-weight-bold'>Data:</label>
                            <input input onChange={(e) => setData (e.target.value)} type = 'date' className='form-control'/>
                        </div>

                        < div className="col-6">
                            <label className='font-weight-bold'>Hora:</label>
                            <input onChange={(e) => setHora (e.target.value)} type = 'time' className='form-control'/>
                        </div>
                </div>

                <div className='form-group mt-5'>
                    <label className='font-weight-bold '> Upload de imagens: </label>
                    <input onChange={(e) => setFoto (e.target.files[0])} type = 'file' className='form-control col-4'/>
                </div>
 

                      <div className='row'> 
                            {
                                carregando > 0 ? <div className="spinner-border text-danger mx-auto" role="status"><span className="visually-hidden">Loading...</span></div>                           
                                :<button onClick={cadastrar} type="button" className='btn btn-info btn-lg mb-3 mt-3 btn-cadastro mx-auto'>Cadastrar</button>
                            }

                            

                      </div> 
                      <div className='MSN-login text-center '>
                                {msgTipo === 'sucesso' && <span className='text-success font-weight-bold' >&#10004; Evento publicado </span>}
                                {msgTipo === 'erro' && <span className='text-danger font-weight-bold '>&#10006; Falha ao publicar, verifique! </span>}
                            </div>

            </form>

                    

        </div>
        </>
    )
    
}

export default EventoCadastro;