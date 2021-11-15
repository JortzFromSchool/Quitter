import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import LogsContainer from './logs/logs_container';
import CreateLogFormContainer from './logs/create_log_form_container';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        
        <ProtectedRoute exact path='/logs' component={LogsContainer} />
        <ProtectedRotue exact path='/users/:userId/' component={CreateLogFormContainer} />
    </Switch>
);

export default App;