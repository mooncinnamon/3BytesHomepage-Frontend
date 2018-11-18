import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';

import PrivateRoute from './PrivateRoute';

import {Home, Login, Slack, Regist} from "../components/index";
import setAuthToken from "../libs/setAuthToken";
import jwt_decode from "jwt-decode";
import store from "../store";
import {logoutUser, setCurrentUser} from "../actions/auth";
import Provider from "react-redux/es/components/Provider";

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
    }
}


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/login"} component={Login}/>
                        <Route exact path={"/regist"} component={Regist}/>
                        <PrivateRoute exact path={"/slack"} component={Slack}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
