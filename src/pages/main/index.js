import React, {Component} from 'react';
import './style.css';

class Main extends Component{
    render(){
        return <section className="d-flex flex-column h-100 align-items-center text-center">
            <div className="mt-5 row">
                <h1>S. O. O. S.</h1>
            </div>
            <div className="mt-2 row">
                <h2 className="pb-5 shadow-sm">Sistema Online de Ordem de Serviço</h2>
            </div>

            <div className="pt-2 row col-10 justify-content-between align-items-center" id="cards">
                
                <div className="flex col-3">
                    <div className="card">
                        <div className="card-header"><h4>Sobre nós</h4></div>
                        <div className="card-body">Solução definitiva em manutenção de equipamentos</div>
                    </div>
                </div>
                <div className="flex col-3">
                    <div className="card">
                        <div className="card-header"><h4>Cliente</h4></div>
                        <div className="card-body">Abra chamados, consulte o andamento, 
                            aprove o orçamento. Tudo isso online!!!</div>
                    </div>
                </div>
                <div className="flex col-3">
                    <div className="card">
                        <div className="card-header"><h4>Colaboradores</h4></div>
                        <div className="card-body">Especialistas em sua áreas de atuação. Profissionais altamente treinados</div>
                    </div>
                </div>

            </div>
        </section>
    
    }
}
export default Main;