import React from "react";
import ReactDOM from "react-dom";
//const css = require('../../css/menu.scss');
import {Link} from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

export class register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            username: "",
            password: "",
            authPass: []
        }
    }

    signUp(){
        fetch(`http://localhost:1337/signUp?name=${this.state.name}&user=${this.state.username}&pass=${this.state.password}`);
        fetch(`http://localhost:1337/auth?user=${this.state.username}&pass=${this.state.password}`)
            .then(res => res.json())
            .then(results => this.setState({authPass:results}, () => {if(this.state.authPass){
                const cookie_key1 = 'eLibUser';
                const cookie_key2 = 'eLibName';
                const cookie_key3 = 'eLibLvl';
                const cookie_key4 = 'eLibID';
                bake_cookie(cookie_key1, this.state.username);
                bake_cookie(cookie_key2, this.state.authPass[0]);
                bake_cookie(cookie_key3, this.state.authPass[1]);
                bake_cookie(cookie_key4, this.state.authPass[2]);
                document.location.replace('/home');
            }}));

    }
    render(){
        return(
            <div className={"midcontainer"} style={{width:'100%'}}>
                <div className="grid">

                    <form action="#" method="POST" className="form login">

                        <div className="form__field">
                            <label htmlFor="login__username" >
                                <span className="hidden">Your Name</span>
                            </label>
                            <input id="name" type="text" name="name" className="form__input" placeholder="Your Name"
                                   required onChange={event => this.setState({name:event.target.value})}/>
                        </div>

                        <div className="form__field">
                            <label htmlFor="login__username">

                                <span className="hidden">Username</span></label>
                            <input id="username" type="text" name="username" className="form__input"
                                   placeholder="Username" required onChange={event => this.setState({username:event.target.value})} />
                        </div>

                        <div className="form__field">
                            <label htmlFor="login__password">

                                <span className="hidden">Password</span></label>
                            <input id="password" type="password" name="password" className="form__input"
                                   placeholder="Password" required onChange={event => this.setState({password:event.target.value})} />
                        </div>

                        <div className="form__field">
                            <input type="button" name="submit" value="Sign Up & Login" onClick={() => this.signUp()} />
                        </div>

                    </form>

                    <p className="text--center">Skip Sign Up? <Link to={"/home"}>Continue as Guest</Link>

                    </p>

                </div>
            </div>
        );
    }

}