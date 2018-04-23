import React from "react";
import PropTypes from 'prop-types';

import { Main } from "./main";

export class Home extends React.Component{
    render(){
        return(
            <Main>
                <div style={{width: '100%'}}>
                    <div className="align text--center" style={{width: '100%'}}>


                        <form action="#" method="POST" className="form login" style={{width: '60%'}}>

                            <div className="form__field">
                                <input className="search form__input" id="search" type="text" name="search" placeholder="What book are you looking for?" required />
                            </div>

                            <div className="form__field">
                                <input className="submittt" type="submit" name="submit" value="Search" />
                            </div>

                        </form>

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