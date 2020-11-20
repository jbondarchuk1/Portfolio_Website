import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout  from './components/Portfolio/Home/Header/Layout';
import { Home } from './components/RandomShit/Home';
import { FetchData } from './components/RandomShit/FetchData';
import { Counter } from './components/RandomShit/Counter';
import Algorithm from './components/Algorithm/Algorithm';
import Main from './components/Portfolio/Home/Main';
import Contact from './components/Portfolio/Contact/Contact';
import Projects from './components/Portfolio/Projects/Projects';
import Resume from './components/Portfolio/Resume/Resume';

import {
  Switch,
} from "react-router-dom";


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>
          <RouteWrapper path='/Home' component={Home} layout={Layout}/>
          <Route exact path='/' component={Main} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Resume' component={Resume} />
          <Route path='/Projects' component={Projects} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/Algorithm' component={Algorithm} />
      </Switch>
    );
  }
}

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}
