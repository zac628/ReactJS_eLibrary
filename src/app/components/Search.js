import React from "react";
import PropTypes from 'prop-types';

import { Main } from "./main";

export class Search extends React.Component{
    constructor(){
        super();
        this.state={
            toSearch: "",
            found: []
        }
    }
    goSearch(){
        const { word, found } = this.state;
        fetch(`http://localhost:1337/find?keyword=${this.state.toSearch}`)
            .then(res => res.json())
            .then(results => this.setState({found:results}, () => console.log("fetched", found)));
    }
    render(){
        return(
            <Main>
                <div style={{width: '100%'}}>
                    <div className="align text--center" style={{width: '100%', top: '110px'}}>

                            <div className="form__field center-x" style={{whiteSpace: 'nowrap'}}>
                                <input className="search form__input" id="search" type="text" style={{color:'white',marginRight: '8px'}} name="search" placeholder="What book are you looking for?" required
                                       onChange={event => this.setState({toSearch:event.target.value})}
                                />
                                    <input className="submittt" name="submit" type="button" value="Search"
                                           onClick={() => this.goSearch()}
                                    />
                            </div>


                    </div>
                </div>
                <div style={{textAlign: 'center', marginTop: '110px'}}>

                        {this.state.found.map(books =>


                        <div>


                            <table className="center-x" style={{width:800, color:'white', borderColor:'#2c3338', position: 'relative'}}>
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

Search.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
};