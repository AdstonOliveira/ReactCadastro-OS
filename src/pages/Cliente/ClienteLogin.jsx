import React, { Component } from 'react';
import LoginB from '../../components/Login/Login';

class ClienteLogin extends Component{

    render(){
        return <section className="flex flex-column align-items-center text-center">

                    <LoginB title="Cliente Login" action="/cliente/index" novo="" recSenha="" />

                </section>
    }



}
export default ClienteLogin;