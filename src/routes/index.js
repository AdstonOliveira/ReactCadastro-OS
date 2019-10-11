import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Login from '../pages/Cliente/login';
import ClienteIndex from '../pages/Cliente/ClienteIndex';

const Routes = () => (
        <Switch>
            <Route path="/cliente/login" component={Login} />
            <Route exact path="/" component={Main} />
            <Route path="/cliente/index" component={ClienteIndex} />
        </Switch>
)
export default Routes;