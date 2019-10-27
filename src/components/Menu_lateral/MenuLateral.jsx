import React, { Component } from 'react';

class MenuLateral extends Component {

    render() {
        return <div class="flex col col-4 ml-5 justify-content-center flex-column border ">

            <div class="row pb-1 h-25 justify-content-center">
                <a href="/cliente/novaOs" class="btn btn-secondary h-100 w-75 p-5">Abrir OS</a>
            </div>

            <div class="row pb-1 h-25 justify-content-center">
                <a href="/cliente/consultarAbertas/{id_cliente}" class="btn btn-secondary p-5 w-75">Consultar OS</a>
            </div>

            <div class="row pb-1 h-25 justify-content-center">
                <a href="/cliente/orcamentos" class="btn btn-secondary p-5 w-75">Orçamentos abertos</a>
            </div>

            <div class="row pb-1 h-25 justify-content-center">
                <a href="/cliente/contato" class="btn btn-secondary p-5 w-75 ">Mensagem ao Tecnico</a>
            </div>
        </div>

    }

}
export default MenuLateral;