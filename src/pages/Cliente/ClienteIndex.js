import React, { Component } from 'react';

class ClienteIndex extends Component {
    render() {
        return (
            <div>
                <section class="d-flex flex-column align-items-center border justify-content-between" style={{ height: 500 }}>

                    <h3 className="mt-5"> Bem Vindo Cliente... </h3>

                    <div class="flex row col-10 border p-5">

                        <div class="col-4 ml-5 d-flex justify-content-center  flex-column border ">

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

                        {/* card 2 */}

                        <div class="col ml-5 w-100 border ">
                            <div className="row h-50 border align-items-center justify-content-between">

                                <div className="col-4 h-75 border">

                                </div>

                                <div className="col-4 h-75 border">

                                </div>
                            </div>

                            <div className="row h-50 border align-items-center justify-content-between">
                                <div className="col-4 h-75 border">

                                </div>

                                <div className="col-4 h-75 border">

                                </div>
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        )
    }
}
export default ClienteIndex;