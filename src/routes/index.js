import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Login from '../pages/Cliente/login';

const Routes = () => (
        <Switch>
            <Route path="/cliente/login" component={Login} />
            <Route path="/colaborador/login" component={LoginCol} />
            <Route exact path="/" component={Main} />
        </Switch>
)
export default Routes;