import React, { Component } from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

class Botao extends Component{


    render(){
        return(
            <div className="row-btn d-flex justify-content-center">
                <Link to={this.props.url} className="btn btn-secondary w-75 p-5">{this.props.title}</Link>
            </div>
        );
    }




}
export default Botao;