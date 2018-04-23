import React from "react";
import PropTypes from 'prop-types';

import { Main } from "./main";

export class Search extends React.Component{
    render(){
        return(
            <Main>
                <div style={{width: '100%'}}>
                    <div className="align text--center" style={{width: '100%', top: '80px'}}>
                        <form action="#" method="POST" style={{textAlign: 'center'}}>
                            <div className="form__field center-x" style={{whiteSpace: 'nowrap'}}>
                                <input className="search form__input" id="search" type="text" style={{color:'white',marginRight: '8px'}} name="search" placeholder="What book are you looking for?" required />
                                    <input className="submittt" name="submit" type="submit" value="Search" />
                            </div>
                        </form>

                    </div>
                </div>
                <div style={{textAlign: 'center', marginTop: '110px'}}>
                    RESULTS
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