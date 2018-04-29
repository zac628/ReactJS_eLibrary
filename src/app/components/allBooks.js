import React from "react";
import PropTypes from 'prop-types';

import { Main } from "./main";

export class getAll extends React.Component{
    constructor(){
        super();
        this.state={
            found: []
        }
    }

    getBooks(){
        fetch(`http://localhost:1337/all`)
            .then(res => res.json())
            .then(results => this.setState({found:results}, () => console.log("fetched", this.state.found)));
    }
    componentDidMount(){
        this.getBooks();
    }
    render(){
        return(
            <Main>
                <div style={{textAlign: 'center', marginTop: '110px'}}>

                    {this.state.found.map(books =>


                        <div>


                            <table className="center-x" style={{width:800, color:'white', borderColor:'#2c3338', position: 'relative'}}>
                                <tbody>
                                <tr>
                                    <th> </th>
                                </tr>

                                <tr>
                                    <td style={{width:150, height:170}} rowSpan="4">
                                        <img src={books.picLoc} style={{width: 150, height: 170 }}/>
                                    </td>
                                    <td>
                                        Title: {books.title}
                                    </td>
                                </tr>
                                <tr>
                                    <td> Author: {books.author}
                                    </td>
                                </tr>
                                <tr>
                                    <td> Description: {books.description}
                                    </td>
                                </tr>

                                <tr>
                                    <td style={{textAlign:'center'}} height="70px">

                                        <input className="submittt" style={{display:'inline'}} type="button" name={books.bookLoc} value="DOWNLOAD" />

                                        <p style={{display:'none'}}>Must be signed in to download</p>
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                            <br/>
                            <br/>
                            <hr style={{width:'79%', borderColor:'rgb(37, 42, 45)'}}/>
                            <br/>
                            <br/>
                        </div>

                    )}


                </div>
            </Main>
        );
    }
}

getAll.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
};