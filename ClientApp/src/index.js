import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Main from './components/Portfolio/Home/Main';
import Contact from './components/Portfolio/Contact/Contact';
import Resume from './components/Portfolio/Resume/Resume';
import Projects from './components/Portfolio/Projects/Projects';
import './index.css';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement);


