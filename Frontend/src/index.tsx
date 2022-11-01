import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import interceptorsService from './Services/InterceptorsService';
import { BrowserRouter } from 'react-router-dom';
import socketService from './Services/socketService';

interceptorsService.createInterceptors()

ReactDOM.render(
    <React.StrictMode>
            <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();