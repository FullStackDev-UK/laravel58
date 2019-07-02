import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//import './index.css';
import App from 'app';
import registerServiceWorker from '../registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './reducers/products-reducer';
import usersReducer from './reducers/users-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: usersReducer
});

const store = createStore(
    allReducers,
    {
        products: [{ name: 'XBox'}],
        user: 'Bill'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());
const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'John'
    }
};
store.dispatch(updateUserAction);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
