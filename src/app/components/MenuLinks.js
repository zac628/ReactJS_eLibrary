import React from "react";
import ReactDOM from "react-dom";

import SliderMenu from 'react-slider-menu';
import './menu.scss';
import {Link} from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';



class MenuLinks extends React.Component {
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
            return <li>Hi there guest. This menu has more items but you must be logged in to access them.</li>;
        }else{
            return <div>
            <li>
                <Link to={"/home"}>Your Account</Link></li>
                <li><Link to={"/home"}>Previous Downloads</Link></li>
            </div>;
        }

    }
    adminTools(){
        const lvl = read_cookie(this.cookie_key3);
        if(lvl == 2){
            return <div><li><Link to={"/deletebook"}>Delete Book</Link></li><li><Link to={"/addBook"}>Add Book</Link></li></div>;
        }
    }
homePage(){
        window.location.replace('/');
       // window.location.reload();
    }
    render () {
        return (
            <div>
            <input type="checkbox" id="navbar-toggle" name="" value="" />
                <div className="page-wrap">
                    <label htmlFor="navbar-toggle" className="toggle-button">☰</label>
                    <div className="navbar">
                        <ul className="navbar-menu">
                            <li><a onClick={ () => this.homePage() }>Home</a></li>
                            <li><Link to={"/allbooks"}>All Books</Link></li>
                            {this.loggedIn()}
                            {this.adminTools()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuLinks;