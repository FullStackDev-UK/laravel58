<script>
    //const axios = require("axios");
    import {HTTP} from '../http-common';
    export default {
        mounted() {
            console.log('VueUsers mounted.');
        },
        data() {
            return {
                state: {
                heading: 'List users',
                token: '',
                users: [],
                userId: null,
                username: null,
                email: null,
                userdetails: null,
                errors: []
                }
            }
        },
        created() {
            HTTP.get('users')
                .then(response => {
                    this.state.users = response.data
                })
                .catch(e => {
                    this.state.errors.push(e)
                })
        },
        methods: {
            vgetUserDetails(userId) {
                HTTP.get('users/'+userId)
                .then(response => {
                    var key_array = Object.keys(response.data.userdetails[0]);
                    var value_array = Object.values(response.data.userdetails[0]);
                    var email = response.data.userdetails[0].email;
                    var username = response.data.userdetails[0].name;

                    this.state.email = email;
                    this.state.username = username;

                    console.log("keys: " + key_array + "\nvalues: " + value_array + "\nemail: " + email);
                })
                .catch(e => {
                    this.state.errors.push(e)
                })
                return true;
            },

            toggle: function () {
                this.toggle = !this.toggle;
                console.log("Toggle fired. Now: " + this.toggle);
                return this.toggle;
            }
        },
        computed: {
        }
    }
</script>
<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">

                <div class="panel-heading"><h4>{{state.heading}}</h4></div>

                <div class="panel-body">

                    <div id="user_information" v-if="state.email">
                        <h5>{{state.username}}</h5>
                        <p>{{state.email}}</p>
                    </div>

                    <div v-if="state.users && state.users.length">
                        <div v-for="user of state.users" v-bind:key="user.id" v-bind:class="{vlistItem:true}" class="shadow-md light-grey-bg mb-3">
                            <h5 class="vliheading">{{user.name}}</h5>
                            <p class="p-2">
                                <a href='#' class="px-2 py-2 vgetUserDetails" v-on:click="vgetUserDetails(user.id)">View details</a>
                                <b class="text-green">Join date:</b> {{user.created_at}}<br />
                                <b class="text-green">Last login:</b> {{user.updated_at}}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .vlistItem {
        border-radius: 15px !important;
        background-color: #fff;
        box-shadow: 0 0 0 3px #41B883 !important;
        float: left !important;
        clear: both !important;
        width: 100% !important;

        .vliheading {
            background-color: #41B883;
            color: #fff;
            padding-left: 15px;
            padding-right: 15px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .vgetUserDetails {
            color: #000;
            background-color: #fff;
            border: 3px solid #41B883;
        }
        .vgetUserDetails:hover {
            background-color: #41B883;
            color: #fff;
            border: 3px solid #fff;
        }
        .text-green {
            color: #41B883;
            font-weight: bold;
            text-shadow: -1px 1px 0px #999;
        }
    }
</style>
