import React from "react";
import ReactDOM from "react-dom";
import { browserHistory} from "react-router";
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";

import { Home } from "./components/Home";
import { login } from "./components/login";
import { register } from "./components/register";
import { Search } from "./components/Search";
import { Main } from "./components/main";


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={login}/>
                    <Route path="/register" component={register}/>
                    <Route path="/search" component={Search}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, window.document.getElementById("app"));

