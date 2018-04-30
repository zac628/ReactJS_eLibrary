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
        fetch(`http://localhost:1337/add?pic=${this.state.pic}&title=${this.state.title}&author=${this.state.author}&des=${this.state.des}&loc=${this.state.loc}`);
        alert("Book has been added!");
        window.location.reload();
    }
    render(){

        return(
            <Main>
                <div>

                    <div className="align" style={{width: '100%'}}>

                        <div className="grid" >

                            <div className="form login">

                                <div className="form__field">
                                    <input type="text" name="pic" className="form__input"
                                           placeholder="URL of book Cover" required onChange={event => this.setState({pic:event.target.value})} />
                                </div>

                                <div className="form__field">
                                    <input type="text" name="title" className="form__input" placeholder="Title" onChange={event => this.setState({title:event.target.value})}
                                           required />
                                </div>


                                <div className="form__field">
                                    <input type="text" name="author" className="form__input" placeholder="Author" onChange={event => this.setState({author:event.target.value})}
                                           required />
                                </div>

                                <div className="form__field" style={{width: '60%'}}>
                                    <input type="text-area" name="description" style={{minWidth: '20rem'}} className="desc" onChange={event => this.setState({des:event.target.value})}
                                              placeholder="Description" required />
                                </div>

                                <div className="form__field">
                                    <input type="text" name="book" className="form__input" placeholder="URL of book PDF" onChange={event => this.setState({loc:event.target.value})}
                                           required />
                                </div>


                                <div className="form__field">
                                    <input type="button" name='submit' value="Add Book"  onClick={() => this.goAdd()} />
                                </div>

                            </div>


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