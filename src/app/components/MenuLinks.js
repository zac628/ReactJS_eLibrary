import React from "react";
import ReactDOM from "react-dom";

import SliderMenu from 'react-slider-menu';
//import './menu.scss';
import {Link} from 'react-router-dom';



class MenuLinks extends React.Component {
    render () {
        return (
            <div>
            <input type="checkbox" id="navbar-toggle" name="" value="" />
                <div className="page-wrap">
                    <label htmlFor="navbar-toggle" className="toggle-button">☰</label>
                    <div className="navbar">
                        <ul className="navbar-menu">
                            <li><Link to={"/home"}>Home</Link></li>
                            <li><Link to={"/home"}>Your Account</Link></li>
                            <li><Link to={"/home"}>Previous Downloads</Link></li>
                            <li><Link to={"/home"}>All Books</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuLinks;