import React, { Component } from 'react';
import LoginB from '../../components/Login/Login';

class LoginCol extends Component{

    render(){
        return  <section className="d-flex flex-column align-items-center text-center">
                    <LoginB title="Colaborador Login" action="/colaborador/index" novo="" recSenha="" />
                </section>
    }



}
export default LoginCol;

