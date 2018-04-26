import React from "react";
import ReactDOM from "react-dom";
//const css = require('../../css/menu.css');
import {Link} from 'react-router-dom';


export class register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            username: "",
            password: ""
        }
    }

    signUp(){
        console.log('this.state', this.state)
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