import React from "react";
import ReactDOM from "react-dom";
import SliderMenu from 'react-slider-menu';
import MenuLinks from './MenuLinks';




export class Header extends React.Component {
    render(){
        return(
            <div>
            <div className="bar">
                <div className="fl-lt" style={{padding:'10px', top:0}}>

                    <div id="mySidenav" className="sidenav">
                        <ul>
                            <div>
                                <a>Hi there guest. This menu has more items but you must be logged in to access
                                    them.</a>
                            </div>

                        </ul>
                    </div>

                </div>
                <div className="fl-rt " style={{padding:'10px', top:0}}>
                    <a className="submittt" type="button" href="#">

                    </a>
                </div>
                <div className="text--center center-x"
                     style={{top:'0px', fontSize:'2em', paddingTop:'30px', position:'absolute'}}>
                </div>

            </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
	
}