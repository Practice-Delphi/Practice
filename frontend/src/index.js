import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


// import Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./reducers";
// import firebase
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCtsbd0_NsCFmiR21t2ns555EsuIWXAN0U",
    authDomain: "aboutme-c0b21.firebaseapp.com",
    databaseURL: "https://aboutme-c0b21.firebaseio.com",
    projectId: "aboutme-c0b21",
    storageBucket: "aboutme-c0b21.appspot.com",
    messagingSenderId: "690553828555"
  };
  firebase.initializeApp(config);

// config redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
