import React, { Component } from 'react';
import LoginB from '../../components/Login/Login';

class Login extends Component{

    render(){
        return <section className="d-flex flex-column h-100 align-items-center text-center">
                    <LoginB title="Cliente Login" />
                </section>
    }



}
export default Login;