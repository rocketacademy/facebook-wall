import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import Wall from './pages/Wall';

function NotFound() {
  return <h1>Not Found</h1>
}

class App extends React.Component {

  render() {
    return (
<Router>
  <Switch>
  <Route exact path="/" component={WelcomePage}/>
  <Route exact path="/wall" component={Wall}/>
  <Route component={NotFound} />
  </Switch>
  </Router>
    )
  }
}

 ReactDOM.render(
  <App />,
  document.getElementById('root')
);


