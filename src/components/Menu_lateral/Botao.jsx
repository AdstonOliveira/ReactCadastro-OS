import React, { Component } from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

class Botao extends Component{


    render(){
        return(
            <div className="row-btn">
                <Link to={this.props.url} className="btn btn-secondary h-100 w-75 p-5">{this.props.title}</Link>
            </div>
        );
    }




}
export default Botao;