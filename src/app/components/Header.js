import React from "react";
import ReactDOM from "react-dom";
import SliderMenu from 'react-slider-menu';
import MenuLinks from './MenuLinks';
import {browserHistory,withRouter, Link} from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


export class Header extends React.Component {

    constructor(){
        super();
        this.cookie_key1 = 'eLibUser';
        this.cookie_key2 = 'eLibName';
        this.cookie_key3 = 'eLibLvl';

    }
    loggedIn(){
        const user = read_cookie(this.cookie_key1);
        const name = read_cookie(this.cookie_key2);
        const lvl = read_cookie(this.cookie_key3);
        if(user==''){
            return <Link className="submittt" to={"/login"} style={{border: 'none', boxShadow: 'none'}}>
                Sign In
            </Link>;
        }else{
            return <a className="submittt" style={{border: 'none', boxShadow: 'none'}} onClick={() => this.logOut()}>
                Sign Out
            </a>;
        }
        }

        logOut(){
            delete_cookie(this.cookie_key1);
            delete_cookie(this.cookie_key2);
            delete_cookie(this.cookie_key3);
            document.location.replace('/login');
        }

        showName(){
            const user = read_cookie(this.cookie_key1);
            const name = read_cookie(this.cookie_key2);
            const lvl = read_cookie(this.cookie_key3);
            if(user==''){
                return <div className="text--center center-x" style={{top:'0px', fontSize:'2em', paddingTop:'30px', position:'absolute'}}>
                    Hello, Guest
                </div>
            }else{
                return <div className="text--center center-x" style={{top:'0px', fontSize:'2em', paddingTop:'30px', position:'absolute'}}>
                    Hello, {name}
                </div>
            }
        }


    render(){

        const user = read_cookie(this.cookie_key1);
        const name = read_cookie(this.cookie_key2);
        const lvl = read_cookie(this.cookie_key3);


        return(
            <div>
            <div className="bar">
                <div className="fl-lt" style={{padding:'10px', top:0}}>

                <MenuLinks  />

                </div>
                <div className="fl-rt " style={{padding:'10px', top:0}}>

                    {this.loggedIn()}

                </div>
                {this.showName()}

            </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
	
}

export default withRouter (Header);