import React from "react";
import ReactDOM from "react-dom";
import '../../css/login.css';
import '../../css/style.css';
import {browserHistory,withRouter, Link} from "react-router-dom";


export class login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: ""
        }
    }

    logIn(){
        console.log('this.state', this.state);
        const {username, password} = this.state;
        fetch(`http://localhost:8080/auth?user=${username}&pass=${password}`,{
            method: 'POST'
        });

    }


    toggleHelpWindow() {
        var x = document.getElementById("helpWin");
        if (x.style.display === "none") {
            x.style.display = "block";
            x.classList.add = "fadeInRight";
        } else {
            x.style.display = "none";
        }
    }

    render(){
        const {username, password} = this.state;
        return(
          <div>
              <div>
                  <img className="center-x" style={{top: '20px'}} src="../../img/logo.png"/>
              </div>
              <div >
                  <div className="grid midcontainer" >

                      <form action="#" method="POST" className="form login">

                          <div className="form__field">
                              <label htmlFor="login__username">
                                  <svg className="icon">

                                  </svg>
                                  <span className="hidden">Username</span></label>
                              <input id="login__username" type="text" name="username" className="form__input"
                                     placeholder="Username" required
                                     onChange={event => this.setState({username:event.target.value})}/>
                          </div>

                          <div className="form__field">
                              <label htmlFor="login__password">
                                  <svg className="icon">

                                  </svg>
                                  <span className="hidden">Password</span></label>
                              <input id="login__password" type="password" name="password" className="form__input"
                                     placeholder="Password" required
                                     onChange={event => this.setState({password:event.target.value})}/>
                          </div>

                          <div className="form__field">
                              <input type="button" name="submit" value="Sign In" onClick={() => this.logIn()}/>
                          </div>

                      </form>

                      <p className="text--center">Not a member? <Link to={"/register"}>Sign up now</Link><br />or <Link to={"/home"}>Continue as Guest</Link>
                          <svg className="icon">

                          </svg>
                      </p>

                  </div>



                  <img className="chat-icon" src="../../img/scroll.gif" width="80px" height="120px" style={{marginRight: '200px', bottom: '38px', border: 'none', boxShadow: 'none', borderRadius: '0px', transform: 'rotate(270deg)'}} />
                      <img className="chat-icon" src="../../img/scroll.gif" width="80px" height="120px" style={{marginRight: '200px', bottom: '38px', border: 'none', boxShadow: 'none', borderRadius: '0px', transform: 'rotate(270deg)'}} />
                          <img className="chat-icon" src="../../img/scroll.gif" width="80px" height="120px" style={{marginRight: '200px', bottom: '38px', border: 'none', boxShadow: 'none', borderRadius: '0px', transform: 'rotate(270deg)'}} />
                              <img className="chat-icon" src="../../img/help.png" width="80px" height="80px" onClick={() => this.toggleHelpWindow()} />
              </div>
          </div>

        );
    }

}
