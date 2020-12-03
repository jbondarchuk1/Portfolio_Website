import React, { Component } from 'react';
import { Route } from 'react-router';
import {
  Switch,
} from "react-router-dom";
import Visualizer from './components/Portfolio/Projects/Algorithm/Visualizer';
import Layout from './components/Portfolio/Home/Header/Layout';
import Main from './components/Portfolio/Home/Main';
import Contact from './components/Portfolio/Contact/Contact';
import Projects from './components/Portfolio/Projects/Projects';
import Resume from './components/Portfolio/Resume/Resume';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>
          <Layout>
            <Route exact path='/' component={Main} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Projects' component={Visualizer} />
            <Route path='/Resume' component={Resume}/>
            <Route path='/Visualizer' component={Visualizer} />
          </Layout>  
      </Switch>
    );
  }
}

