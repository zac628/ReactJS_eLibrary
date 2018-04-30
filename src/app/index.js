import React from "react";
import ReactDOM from "react-dom";
import { browserHistory} from "react-router";
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";

import { Home } from "./components/Home";
import { login } from "./components/login";
import { register } from "./components/register";
import { Search } from "./components/Search";
import { add } from "./components/addBook";
import { getAll } from "./components/allBooks";
import { del } from "./components/delBook";
import { prev } from "./components/previous";
import { Main } from "./components/main";


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <div>
                    <Route exact path="/" component={Search}/>
                    <Route path="/home" component={Search}/>
                    <Route path="/login" component={login}/>
                    <Route path="/register" component={register}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/allbooks" component={getAll}/>
                    <Route path="/addbook" component={add}/>
                    <Route path="/deletebook" component={del}/>
                    <Route path="/previous" component={prev}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, window.document.getElementById("app"));

