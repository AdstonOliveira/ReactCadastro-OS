import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import ClienteLogin from '../pages/Cliente/ClienteLogin';
import ClienteIndex from '../pages/Cliente/ClienteIndex';
import LoginCol from '../pages/Colaborador/ColLogin'

const Routes = () => (
        <Switch>
            <Route path="/cliente/login" component={ClienteLogin} />
            <Route path="/cliente/index" component={ClienteIndex} />

            <Route path="/colaborador/login" component={LoginCol} />
            <Route exact path="/" component={Main} />
            
        </Switch>
)
export default Routes;