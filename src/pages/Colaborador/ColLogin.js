import React, { Component } from 'react';
import LoginB from '../../components/Login/Login';

class LoginCol extends Component{

    render(){
        return  <section className="d-flex flex-column h-100 align-items-center text-center">
                    <LoginB title="Colaborador Login" />
                </section>
    }



}
export default LoginCol;

