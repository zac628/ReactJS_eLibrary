import React from "react";
import ReactDOM from "react-dom";
import { browserHistory} from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { login } from "./components/login";
import { register } from "./components/register";


class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path="/register" component = {register}/>
                    <Route path="/login" component = {login}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, window.document.getElementById("app"));

