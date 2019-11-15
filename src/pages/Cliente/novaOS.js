import React, { Component } from 'react';

class novaOs extends Component {
    render() {
        return <section className="d-flex flex-column  align-items-center text-center">
            <div className="pt-2 row col-7 justify-content-between align-items-center" id="cards">

                <div className="card">
                    <div className="card-header text-center">Cadastro de OS</div>

                        <div className="card-body">
                        <form>
                            <div className="row d-flex justify-content-center">

                                <div className="form-group col-md-5 ">
                                    <label for="">Equipamento</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Equipamento" />
                                </div>

                                <div className="form-group col-md-3">
                                    <label>Numero de Serie</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Numero de Serie" />
                                </div>

                                <div className="form-group col-md-3">
                                    <label>Data</label>
                                    <input type="date" className="form-control form-control-lg" />
                                </div>

                                <div className="form-group col-md-11">
                                    <label>Defeito</label>
                                    <textarea className="form-control form-control-lg" rows="7" cols="33"> </textarea>
                                </div>

                            </div>
                            <div className="d-flex justify-content-end mt-5">
                                <button type="submit" class="btn btn-success btn-lg">Salvar</button>
                            </div>

                        </form>
                        </div>

                </div>
                

            </div>

        </section>

    }
}

export default novaOs;
