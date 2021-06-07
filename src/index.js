import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_base.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,

    document.getElementById("root")
)
