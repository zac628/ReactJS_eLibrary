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
            .then(results => this.setState({found}, () => console.log("fetched", results)));
    }
    render(){
        return(
            <Main>
                <div style={{width: '100%'}}>
                    <div className="align text--center" style={{width: '100%', top: '80px'}}>

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
                    <h1>Results</h1>
                    <ul>
                        {this.state.found.map(books =>
                        <li key={books.id}>{ books.title }</li>
                        )}
                    </ul>
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