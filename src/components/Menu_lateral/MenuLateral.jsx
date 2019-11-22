import React, { Component } from 'react';
import lista from './botoes.json';
import Botao from './Botao';
import '../os/style.css';

class MenuLateral extends Component {
    constructor(props){
        super(props);

        this.state = {
            botoes: lista.botoes,
        }
    }


    render() {
        return <div className="container d-flex flex-column justify-content-between">
            
                {   this.state.botoes.map( botao => (
                    <div className="row-btn">
                       <Botao url={botao.url} title={botao.title} />
                    </div>
                ))
                }
            
            

            {/* <div className="row-btn">
                <a href="/cliente/consultarAbertas/{id_cliente}" className="btn btn-secondary p-5 w-75">Consultar OS</a>
            </div>

            <div className="row-btn">
                <a href="/cliente/orcamentos" className="btn btn-secondary p-5 w-75">Orçamentos abertos</a>
            </div>

            <div className="row-btn">
                <a href="/cliente/contato" className="btn btn-secondary p-5 w-75 ">Mensagem ao Tecnico</a>
            </div> */}
        </div>

    }

}
export default MenuLateral;