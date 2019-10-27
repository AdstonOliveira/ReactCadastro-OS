import React, { Component } from 'react';

class MenuLateral extends Component {

    render() {
        return <div className="container d-flex flex-column justify-content-between">

            <div className="row-btn">
                <a href="/cliente/novaOs" className="btn btn-secondary h-100 w-75 p-5">Abrir OS</a>
            </div>

            <div className="row-btn">
                <a href="/cliente/consultarAbertas/{id_cliente}" className="btn btn-secondary p-5 w-75">Consultar OS</a>
            </div>

            <div className="row-btn">
                <a href="/cliente/orcamentos" className="btn btn-secondary p-5 w-75">Orçamentos abertos</a>
            </div>

            <div className="row-btn">
                <a href="/cliente/contato" className="btn btn-secondary p-5 w-75 ">Mensagem ao Tecnico</a>
            </div>
        </div>

    }

}
export default MenuLateral;