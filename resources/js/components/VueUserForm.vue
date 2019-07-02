<template>
    <div class="row justify-content-center mt-1 mb-1">
        <div class="col-md-12 mb-5">
            <div class="card light-grey-bg">
                <div class="card-header"><a class="plusSymbol" v-on:click="show = !show">+</a><h4>{{heading}}</h4></div>

                <div class="card-body vgrad"><!--  v-if="show" -->

                    <transition name="fade">
                        <form>
                            <div class="form-row m-1 mb-3">
                                <label>Username: </label>
                                <input type="text" class="inputBox" name="username" v-model="username" v-bind:class="compClasses" />
                                <span v-if="errors!=null && errors.response.data.errors.username!=undefined"> {{ errors.response.data.errors.username[0] }} </span>
                            </div>
                            <div class="form-row m-1 mb-3">
                                <label>Email: </label>
                                <input type="text" class="inputBox" name="useremail" v-model="useremail" v-bind:class="compClasses" />
                                <span v-if="errors!=null && errors.response.data.errors.useremail!=undefined"> {{ errors.response.data.errors.useremail[0] }} </span>
                            </div>
                            <div class="form-row m-1 mb-3">
                                <label>Password: </label>
                                <input type="text" class="inputBox" name="userpassword" v-model="userpassword" v-bind:class="compClasses" />
                                <span v-if="errors!=null && errors.response.data.errors.userpassword!=undefined"> {{ errors.response.data.errors.userpassword[0] }} </span>
                            </div>
                            <div>
                                <button type="submit" class="py-2 px-4 m-1 hover:shadow-md submitUserDetails" v-on:click="show = !show" @click="onSubmit">Submit</button>
                            </div>
                        </form>
                    </transition>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    const axios = require("axios");
    import {HTTP} from '../http-common';
    import { userInfo } from 'os';
    export default {
        mounted() {
            console.log('VueUserForm mounted.');
        },
        data() {
            return {
                heading: 'Add a user',
                useremail: '',
                userpassword: '',
                username: '',
                errors: null,
                show: true,
            }
        },
        created() {
        },
        methods: {
            addUser() {
                HTTP.post('users', {
                    useremail: this.useremail,
                    username: this.username,
                    userpassword: this.userpassword
                }).then((response) => {

                    $('#user_information').html("The user has been added to the database.<br>Below are the contents of the JSON file for portability");

                }).catch((errors) => {

                    this.errors = errors;
                    
                });
            },

            onChange(e){
                this.setState({[e.target.name]: e.target.value});
            },

            onSubmit(e){
                e.preventDefault();
                this.addUser();
            }
        },
        computed: {
            compClasses(){
                return {
                    useremail: this.useremail,
                    username: this.username,
                    userpassword: this.userpassword,
                    errors: this.errors
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $vcolor: #000;
    $vbgcolor: #41B883;
    $bord-rad: 15px;

    button {
        float: right;
        color: $vcolor !important;
        border: 3px solid $vbgcolor !important;
        border-radius: $bord-rad !important;
        background-color: #fff;
    }

    .submitUserDetails:hover {
        background-color: #41B883;
        color: #fff !important;
        border: 3px solid #fff !important;
        font-weight: bolder !important;
    }
</style>