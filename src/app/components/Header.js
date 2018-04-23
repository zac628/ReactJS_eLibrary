import React from "react";
import ReactDOM from "react-dom";
import SliderMenu from 'react-slider-menu';
import MenuLinks from './MenuLinks';
import {browserHistory,withRouter} from "react-router-dom";




export class Header extends React.Component {
    onNavSignIn(){
        this.props.history.push("/login");
    }
    render(){
        return(
            <div>
            <div className="bar">
                <div className="fl-lt" style={{padding:'10px', top:0}}>

                <MenuLinks  />

                </div>
                <div className="fl-rt " style={{padding:'10px', top:0}}>
                    <button className="submittt" type="button" onClick={this.onNavSignIn.bind(this)} style={{border: 'none', boxShadow: 'none' }}>
                        Sign In
                    </button>
                </div>
                <div className="text--center center-x" style={{top:'0px', fontSize:'2em', paddingTop:'30px', position:'absolute'}}>
                    Hey, User
                </div>

            </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
	
}

export default withRouter (Header);