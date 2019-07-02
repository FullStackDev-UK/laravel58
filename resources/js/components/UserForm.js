import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {HTTP} from '../http-common';

class UserForm extends Component {

    constructor(props){
        super(props);
        // Bind method to instance
        this.toggleHoverState = this.toggleHoverState.bind(this);

        this.state = {
            heading: 'Add a user',
            useremail: '',
            username: '',
            userpassword: '',
            errors: null,
            hoverstate: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    toggleHoverState(){
        this.setState({hoverstate: !this.state.hoverstate});
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    addUser() {
        HTTP.post('users', {
            useremail: this.state.useremail,
            username: this.state.username,
            userpassword: this.state.userpassword
        }).then((response) => {
            console.error(response)
        })
        .catch((errors) => {
            this.setState({errors: errors});
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.addUser();
    }

    componentWillReceiveProps(props){
        console.log("props: " + props);
        return;
    }

    render() {
        const cardheaderstyling = { backgroundColor: '#395693', color: '#fff' };
        let nameerror, emailerror, passworderror;
            if (this.state.errors){
                if (this.state.errors!=null && this.state.errors.response.data.errors.username !== undefined){
                    nameerror = this.state.errors.response.data.errors.username[0];
                } else {
                    nameerror = '';
                }
                if (this.state.errors!=null && this.state.errors.response.data.errors.useremail !== undefined){
                    emailerror = this.state.errors.response.data.errors.useremail[0];
                } else {
                    emailerror = '';
                }
                if (this.state.errors!=null && this.state.errors.response.data.errors.userpassword !== undefined){
                    passworderror = this.state.errors.response.data.errors.userpassword[0];
                } else {
                    passworderror = '';
                }
            }
        
        var subbtnstyling;
        if (this.state.hoverstate) {
            subbtnstyling = { float: 'right', color: '#fff', backgroundColor: '#395693', borderRadius: '15px', border: '3px solid #fff' }
        } else {
            subbtnstyling = { float: 'right', color: '#000', backgroundColor: '#fff', borderRadius: '15px', border: '3px solid #395693' }
        }

        return (
            <div className="row justify-content-center mt-1 mb-1">
                <div className="col-md-12 mb-5">
                    <div className="card light-grey-bg">
                        <div className="card-header" style={cardheaderstyling}><a className="plusSymbol">+</a><h4>{this.state.heading}</h4></div>

                        <div className="card-body rgrad">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-row m-1 mb-3">
                                    <label>Username: </label>
                                    <input type="text" className="inputBox" name="username" onChange={this.onChange} value={this.state.username} />
                                    {nameerror}
                                </div>
                                <div className="form-row m-1 mb-3">
                                    <label>Email: </label>
                                    <input type="text" className="inputBox" name="useremail" onChange={this.onChange} value={this.state.useremail} />
                                    {emailerror}
                                </div>
                                <div className="form-row m-1 mb-3">
                                    <label>Password: </label>
                                    <input type="text" className="inputBox" name="userpassword" onChange={this.onChange} value={this.state.userpassword} />
                                    {passworderror}
                                </div>
                                <div className="pull-right">
                                    <button type="submit" className="py-2 px-4 m-1 hover:shadow-md" style={subbtnstyling} onMouseEnter={this.toggleHoverState} onMouseLeave={this.toggleHoverState}>Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('userform')) {
    ReactDOM.render(<UserForm />, document.getElementById('userform'));
}

export default UserForm;