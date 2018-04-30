import React from "react";
import PropTypes from 'prop-types';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import { Main } from "./main";

export class Search extends React.Component{
    constructor(){
        super();
        this.cookie_key4 = 'eLibID';
        this.state={
            toSearch: "",
            height: true,
            match: false,
            found: []
        }
    }

    changeHeight(){
        if(this.state.match) {
            this.setState({height: false})
        }else if(!this.state.match){
            this.setState({height: true})
        }
    }

    update(event){
        this.setState({toSearch:event.target.value});
        this.setState({match: true});
        console.log('bool', this.state.match)
    }
    goSearch(){
        this.changeHeight();
        const { word,height, found } = this.state;
        fetch(`http://localhost:1337/find?keyword=${this.state.toSearch}`)
            .then(res => res.json())
            .then(results => this.setState({found:results}, () => console.log("fetched", found)));
    }

    addPrev(id){
        const userid = read_cookie(this.cookie_key4);
        fetch(`http://localhost:1337/prev?id=${id}&user=${userid}`);
        //alert("Book has been added!");
    }
    render(){
        let inHeight = this.state.height ? "50%" : "110px";
        return(
            <Main>
                <div style={{width: '100%'}}>
                    <div className="align text--center" style={{zIndex:5, width: '100%', top: inHeight}}>

                            <div className="form__field center-x" style={{whiteSpace: 'nowrap'}} >
                                <input className="search form__input" id="search" type="text" style={{color:'white',marginRight: '8px'}} name="search" placeholder="What book are you looking for?" required
                                       onChange={event => {this.update(event)}}
                                />
                                    <input className="submittt" name="submit" type="submit" value="Search"
                                           onClick={() => this.goSearch()}
                                    />
                            </div>


                    </div>
                </div>
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

                                    <a className="submittt" style={{display:'inline'}} onClick={()=>this.addPrev(books.bookid)} type="button" href={books.bookLoc} download>DOWNLOAD</a>

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

Search.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
};