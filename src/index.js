import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Order from './components/Order';
import Summary from './components/Summary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Order/>
    <Summary/>
  </React.StrictMode>
);