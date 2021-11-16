import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import GroupsIndexContainer from './groups/groups_index_container';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <ProtectedRoute exact path='/users/:userId/' component={ProfileContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path="/groups" component={GroupsIndexContainer} /> 
        {/* <Route path="/groups/:groupId" component={GroupsShowContainer} />  */}
    </Switch>
  </div>
);

export default App;

// removed: <ProtectedRoute exact path='/logs' component={LogsContainer} />