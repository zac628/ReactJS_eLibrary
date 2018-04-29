import React from "react";
import PropTypes from 'prop-types';

import { Main } from "./main";
import { withRouter } from 'react-router-dom';

export class Home extends React.Component{
    constructor(){
        super();
        this.state={
            contToSearch: ""
        }
    }

contSearch(){
    this.props.history.push('/search')
}
    render(){
        return(
            <Main>
                <div style={{width: '100%'}}>
                    <div className="align text--center" style={{width: '100%'}}>


                        <div className="form login" style={{width: '60%'}}>

                            <div className="form__field">
                                <input className="search form__input" id="search" type="text" name="search" placeholder="What book are you looking for?" required
                                       onChange={event => this.setState({contToSearch:event.target.value})}
                                />
                            </div>

                            <div className="form__field">
                                <input className="submittt" type="button" name="submit" value="Search" onClick={() => this.contSearch()}/>
                            </div>

                        </div>

                    </div>
                </div>
            </Main>
        );
    }
}

Home.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
};