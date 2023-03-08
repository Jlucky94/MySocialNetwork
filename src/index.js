import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <BrowserRouter>
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
        <App/>
    </Provider>
    </HashRouter>
    // </BrowserRouter>
)




