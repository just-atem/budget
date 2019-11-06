import React from 'react';//importing react from react module
import ReactDOM from 'react-dom';//takes and copies to the browser
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
 


ReactDOM.render(<AppRouter />, document.getElementById('app'));


