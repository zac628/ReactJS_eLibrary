import React from "react";

import { Header } from "./Header";

export class Main extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <Header/>
                    </div>
                </div>
                <div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
