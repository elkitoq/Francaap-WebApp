import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import {App} from './App.js'
import reportWebVitals from './reportWebVitals';
import './assets/css/styleGeneral.css'
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Router >
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
