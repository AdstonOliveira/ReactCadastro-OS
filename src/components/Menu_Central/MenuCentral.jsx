import React, { Component } from 'react';
import OS from '../os/os';

class MenuCentral extends Component {
    render() {
        return <div className="flex col bg-dark h-100 menuCentral" style={{ height: 100 }}>

            <div className="row h-50  align-items-center justify-content-between">
                <div className="col-7 h-75 border bg-light" >
                   <OS/>
                </div>
            </div>

            <div className="row h-50 align-items-center justify-content-between">
                <div className="col-7 h-75 bg-light">
                    <OS/>
                </div>
            </div>

        </div>

    }


}
export default MenuCentral;