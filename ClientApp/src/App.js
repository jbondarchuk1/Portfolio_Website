import React, { Suspense, Component } from 'react';
import { Route } from 'react-router';
import {
  Switch,
} from "react-router-dom";
import Algorithm from './components/Algorithm/Algorithm';
import Layout from './components/Portfolio/Home/Header/Layout';
import Main from './components/Portfolio/Home/Main';
import Contact from './components/Portfolio/Contact/Contact';
import Projects from './components/Portfolio/Projects/Projects';
import Resume from './components/Portfolio/Resume/Resume';

// const Main = React.lazy(()=> import('./components/Portfolio/Home/Main'))
// const Contact = React.lazy(()=> import('./components/Portfolio/Contact/Contact'))
// const Projects = React.lazy(()=> import('./components/Portfolio/Projects/Projects'))
// const Resume = React.lazy(()=> import('./components/Portfolio/Resume/Resume'))
// const Algorithm = React.lazy(()=> import('./components/Algorithm/Algorithm'))

export default class App extends Component {
  static displayName = App.name;

  render () {
    // this is just me playing around with lazy loading
    return (
      <Switch>

          <Layout>
          <Suspense fallback={<div>loading...</div>}>
            <Route exact path='/' component={Main} />
          </Suspense>

          {/* <Suspense fallback={<div>loading...</div>}> */}
            <Route path='/Contact' component={Contact} />
            {/* </Suspense> */}

            {/* <Suspense fallback={<div>loading...</div>}> */}
            {/* <Route path='/Projects' component={Projects} /> */}
            <Route path='/Projects' component={Algorithm} ></Route>
            {/* </Suspense> */}

            {/* <Suspense fallback={<div>loading...</div>}> */}
            <Route path='/Resume' component={Resume}/>
            {/* </Suspense> */}

            <Route path='/Algorithm' component={Algorithm} />
          </Layout>  
      </Switch>
    );
  }
}

// function RouteWrapper({
//   component: Component, 
//   layout: Layout, 
//   ...rest
// }) {
//   return (
//     <Route {...rest} render={(props) =>
//       <Layout {...props}>
//         <Component {...props} />
//       </Layout>
//     } />
//   );
// }
