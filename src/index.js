import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { Provider } from "react-redux";
import store from './store.js';


const code = new URLSearchParams(window.location.search).get('code')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CoreLayout code={code}>
        <Routes code={code}/>
      </CoreLayout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
