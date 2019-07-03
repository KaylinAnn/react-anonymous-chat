import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CometChat } from '@cometchat-pro/chat';

CometChat.init(process.env.REACT_APP_COMETCHAT_APPID)
  .then(() => {
    console.log("Initialized CometChat");
  })
  .catch(() => {
    console.log('Failed to initialize CometChat');
  })



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
