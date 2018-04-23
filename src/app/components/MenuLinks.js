import React from "react";
import ReactDOM from "react-dom";

import SliderMenu from 'react-slider-menu';
import './menu.scss';
import {Link} from 'react-router';


class MenuLinks extends React.Component {
    render () {
        return (
            <div>
            <input type="checkbox" id="navbar-toggle" name="" value="" />
                <div className="page-wrap">
                    <label htmlFor="navbar-toggle" className="toggle-button">☰</label>
                    <div className="navbar">
                        <ul className="navbar-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Previous Downloads</a></li>
                            <li><a href="#">All Books</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuLinks;