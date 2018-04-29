import React from "react";
import PropTypes from 'prop-types';

import { Main } from "./main";

export class add extends React.Component{
    constructor(){
        super();
        this.state={
            pic: "",
            title: '',
            author: '',
            des: '',
            loc: ''
        }
    }

    goAdd(){
        fetch(`http://localhost:1337/find?keyword=${this.state.toSearch}`);
    }
    render(){

        return(
            <Main>
                <div>

                    <div className="align" style={{width: '100%'}}>

                        <div className="grid" >

                            <form action="#" method="POST" className="form login">

                                <div className="form__field">
                                    <input type="text" name="pic" className="form__input"
                                           placeholder="URL of book Cover" required />
                                </div>

                                <div className="form__field">
                                    <input type="text" name="title" className="form__input" placeholder="Title"
                                           required />
                                </div>


                                <div className="form__field">
                                    <input type="text" name="author" className="form__input" placeholder="Author"
                                           required />
                                </div>

                                <div className="form__field" style={{width: '60%'}}>
                                    <input type="text-area" name="description" style={{minWidth: '20rem'}} className="desc"
                                              placeholder="Description" required />
                                </div>

                                <div className="form__field">
                                    <input type="text" name="book" className="form__input" placeholder="URL of book PDF"
                                           required />
                                </div>


                                <div className="form__field">
                                    <input type="submit" name='submit' value="Add Book" enctype="multipart/form-data" />
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}

add.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
};