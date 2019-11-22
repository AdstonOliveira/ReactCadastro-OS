import React, { Component } from 'react';
import './style.css';

class os extends Component {
    render(){

        return <div className="row">
            <table className="table table-striped ">
                <thead id="teste">
                    <tr>
                    <th scope="col">Numero</th>
                    <th scope="col">Data</th>
                    <th scope="col">Defeito</th>
                    <th scope="col">Valor</th>
                    </tr>
                </thead>

                <tbody>
                    <tr id="teste">
                    <td >1</td>
                    <td>21/11/2019</td>
                    <td>Queimado</td>
                    <td>1.200</td>
                    </tr>
                 </tbody>
            </table>
        </div>
    }

}
    export default os;