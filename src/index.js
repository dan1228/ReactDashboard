import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Card from './Card';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);