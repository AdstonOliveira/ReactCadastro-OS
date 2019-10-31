import React, { Component } from 'react';

class novaOs extends Component {
    render() {
        return <div className="container col-7">
            <div class="card2 border">
                <div class="card-header text-center">Cadastro de OS</div>
                <div class="card-body">
                    <form>
                        <div className="form-row">

                            <div className="form-group col-md-6">
                                <label for="">Equipamento</label>
                                <input type="text" className="form-control" placeholder="Equipamento" />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Numero de Serie</label>
                                <input type="text" className="form-control" placeholder="Numero de Serie" />
                            </div>

                            <div className="form-group col-md-2">
                                <label>Data</label>
                                <input type="date" className="form-control" placeholder="Numero de Serie" />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Defeito</label>
                                <textarea className="form-control"> </textarea>
                            </div>

                        </div>
                        <div class="card-footer d-flex justify-content-end">
                            <button type="submit" class="btn btn-success" rows="10" cols="33">Salvar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    }
}

export default novaOs;
