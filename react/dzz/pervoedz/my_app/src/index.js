import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let nav = {"Главная": "/index", "Каталог": "/Catalog", "Контакты": "/Contacts", "Связаться": "/Header"};

root.render(
  <React.StrictMode>
    <App navigation={nav}/>
  </React.StrictMode>
);



