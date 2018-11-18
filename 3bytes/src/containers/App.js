import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from "../stores";
import Provider from "react-redux/es/components/Provider";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
