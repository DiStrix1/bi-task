import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='702348366717-g0euo00h3om8vhuqj8mklo4jal84dtng.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
