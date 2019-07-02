import React, { Component } from 'react';
//import axios from 'axios';
import ReactDOM from "react-dom";

import {HTTP} from '../http-common';

class Users extends Component {

    constructor(...props){
        super(...props);
        this.state = {
            heading: 'List users',
            token: '',
            users: [],
            userId: null,
            username: null,
            email: null,
            errors: [],
            getUserDetails: this.getUserDetails.bind(this)
        }
    }
    
    componentDidMount() {
        let config = {
                headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            }
        }

        const getUsers = async () => {
            try {
                return await HTTP.get('users'); // 'users' to call the API || 'public/testdata.json' to call local file
            } catch (error) {
                console.error(error);
            }
        }

        const countUsers = async () => {
            const users = await getUsers();

            if (users) {
                this.setState({ users : Object.entries(users.data), store : Object.entries(users.data) });
                console.log(`Got ${Object.entries(users.data).length} users`);
            }
        }

        countUsers();
    }

    getUserDetails(userId) {
        HTTP.get('users/'+userId)
        .then(response => {
            var key_array = Object.keys(response.data.userdetails[0]);
            var value_array = Object.values(response.data.userdetails[0]);
            var email = response.data.userdetails[0].email;

            this.setState(
                {
                    userId: response.data.userdetails[0].id, 
                    username: response.data.userdetails[0].name,
                    email: response.data.userdetails[0].email
                }
            )

            console.log("keys: " + key_array + "\nvalues: " + value_array + "\nemail: " + email);
        })
        .catch(e => {
            this.setState({errors: e})
        })
        return true;
    }

    render() {
        let rblue = '#395693';
        let heading = this.state.heading;
        let username = this.state.username;
        let email = this.state.email;

        const rlistitemstyling = { borderRadius: '15px', border: '3px solid', borderColor: rblue, padding: '0px', margin: '0px', float: 'left !important', clear: 'both !important', width: '100% !important', marginBottom: '10px' };
        const rliheadingstyling = { color: 'white', backgroundColor: rblue, paddingLeft: '15px', paddingRight: '15px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' };
        const rbluetext = { color: rblue, fontWeight: 'bold', textShadow: '-1px 1px 0px #999' };

        const allUsers = this.state.users.flatMap( ( user => {
            return <div key={user[1]['id']} style={rlistitemstyling} className="shadow-md light-grey-bg">
                <h5 style={rliheadingstyling}>{user[1]['name'] || "-----"}</h5>
                <p className="p-2">
                    <a className="px-2 py-2 getUserDetails" onClick={() => this.getUserDetails(user[1]['id'])}>View details</a>
                    <b style={rbluetext}>Join date:</b> {user[1]['created_at']}<br />
                    <b style={rbluetext}>Last login:</b> {user[1]['updated_at']}
                </p>
            </div>
        } ) );

        return (
            <div>
                <h4>{heading}</h4>
                <h5>{username} </h5>
                <p>{email}</p>
                {allUsers}
            </div>
        );
    }
}

if (document.getElementById('userdiv')) {
    ReactDOM.render(<Users />, document.getElementById('userdiv'));
}

export default Users;