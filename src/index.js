import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Result from './components/Result';
import PrivateRoute from './components/PrivateRoute';

const routing = (
    <Router>
        <div>
            <PrivateRoute path="/" component={App} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/welcome" component={Welcome}  />
            <PrivateRoute path="/result" component={Result} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
