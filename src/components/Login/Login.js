import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {

    render() {
        return <div className="col-4 mt-5 mb-5">
            <div className="card login">
                <div className="card-header"><h4>{this.props.title}</h4></div>
                <div className="card-body">
                    <form action={this.props.action} method="POST" id="form">

                        <div className="form-group">
                            <label htmlFor="usuario">Usuário:</label>
                            <input type="text" className="form-control form-control-lg" name="usuario" id="usuario" placeholder="Usuario"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" id="senha" className="form-control form-control-lg" placeholder="Password"></input>
                        </div>

                        <div className="form-group pt-3">
                            <input type="button" id="enviar" value="Entrar" className="col-12 btn btn-primary btn-lg"></input>
                        </div>
                    </form>

                    <div className="d-flex justify-content-between">
                        <Link to={this.props.novo} className="card-link">Novo por aqui?</Link>
                        <Link to={this.props.recSenha} className="card-link">Esqueceu a senha?</Link>
                    </div>
                </div>

            </div>
        </div>
    }



}
export default Login;