import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuario: '',
            senha: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit() {
        window.location.href = this.props.action;

    }
    
    render() {
        return <div className="col-4 mt-5 mb-5">
            <div className="card login">
                <div className="card-header"><h4>{this.props.title}</h4></div>
                <div className="card-body">

                    <div className="form-group">
                        <label htmlFor="usuario">Usuário:</label>
                        <input type="text" value={this.state.usuario} onChange={this.handleChange} className="form-control form-control-lg" name="usuario" id="usuario" placeholder="Usuario"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" value={this.state.senha} onChange={this.handleChange} name="senha" id="senha" className="form-control form-control-lg" placeholder="Password"></input>
                    </div>

                    <div className="form-group pt-3">
                        <input onClick={this.handleSubmit} type="submit" id="enviar" value="Entrar" className="col-12 btn btn-primary btn-lg"></input>
                    </div>

                    <div className="d-flex justify-content-between" id="links">
                        <Link to={this.props.novo} className="card-link">Novo por aqui?</Link>
                        <Link to={this.props.recSenha} className="card-link">Esqueceu a senha?</Link>
                    </div>
                </div>

            </div>
        </div>
    }



}
export default Login;