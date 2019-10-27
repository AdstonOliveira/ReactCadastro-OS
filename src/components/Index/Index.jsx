import React, {Component} from 'react';
import MenuLateral from '../Menu_lateral/MenuLateral';
import MenuCentral from '../Menu_Central/MenuCentral';
import './style.css';

class Index extends Component{

    render(){
        return <section>
            <div className="justify-content-center"><h1>{this.props.nome}</h1></div>
            {/* <div className="border justify-content-center"><h1>Testando parametros</h1></div> */}
            
            <div className="row flex col">

                <div className="d-flex col col-4">
                    <MenuLateral />
                </div>
                <div className="col">
                    <MenuCentral />
                </div>

            </div>
        </section>

    }
}
export default Index;