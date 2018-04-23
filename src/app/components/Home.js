import React from "react";
import PropTypes from 'prop-types';

import { Header } from "./Header";

export class Home extends React.Component{
    render(){
        console.log(this.prop);
        return(
            <Header/>
        );
    }
}

Home.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
};