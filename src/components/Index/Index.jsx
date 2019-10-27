import React, {Component} from 'react';
import MenuLateral from '../Menu_lateral/MenuLateral';
import MenuCentral from '../Menu_Central/MenuCentral';
import './style.css';

class Index extends Component{

    render(){
        return <section>
            <div className="row w-100 border justify-content-center" style={{width: 100}}><h1>{this.props.nome}</h1></div>
            <div className="row border w-100" style={{height: 100}}>
                <MenuLateral />
                <MenuCentral />
            </div>
        </section>

    }
}
export default Index;