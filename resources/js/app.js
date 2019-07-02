if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {scope: ''})
    .then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  } 

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import * as Vue from "vue";
global.Vue = global.Vue = require('vue');

import axios from "axios";
global.axios = global.axios = require('axios');
window.axios = require('axios');

require('./bootstrap');
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Users');
require('./components/UserForm');
console.log("React components loaded........");

require('./components/VueUsers');
require('./components/VueUserForm');
console.log("Vue components loaded........");

Vue.component('vue-list-users', require('./components/VueUsers').default);
Vue.component('vue-add-user-form', require('./components/VueUserForm').default);

var obj = {
    foo: 'bar'
}

// Main Vue container
new Vue({
    el: '#app',
    data () {
        return {
            obj: obj,
            info: null
        }
    }
    //, mounted () {
    //     axios
    //         .get('http://')
    //         .then(response => (this.info = response))
    // }
})
