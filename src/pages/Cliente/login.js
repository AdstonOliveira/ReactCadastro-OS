import React, { Component } from 'react';

class Login extends Component{

    render(){
        return <div className="container d-flex justify-content-center align-items-center">
                    <div className="col-4">
                    
                        <div className="card">
                            <h3 className=" d-flex justify-content-center card-header bg-dark ">Login</h3>
                                <div className="card-body">
                                     <form action="" method="POST" id="form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="usuario" id="usuario" placeholder="Usuario"></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="senha" id="senha" className="form-control" placeholder="Password"></input>
                                        </div>
                                        <div className="form-group pt-3">
                                            <input type="button" id="enviar" value="Entrar" className="col-12 btn btn-primary"></input>
                                        </div>
                                    </form>

                                    <div className="d-flex justify-content-between">
                                        {/* <a href="/cliente/novo" className="card-link">Novo por aqui?</a>
                                        <a href="" className="card-link">Esqueceu a senha?</a> */}
                                    </div>
                                </div>

                        </div>
                    </div>
                    </div>
    }



}
export default Login;