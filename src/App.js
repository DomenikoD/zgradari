/* src/App.js */
import React from 'react'
import Amplify from 'aws-amplify'

import Home from './Home'
import TODO from './TODO'
import About from './About'
import ManagerAdd from './ManagerAdd'

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  
  return(
    <Router>
 
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/pocetna" component={TODO}/>
        <Route path="/prijava" component={TODO}/>
        <Route path="/registracija" component={TODO}/>
        <Route path="/onama" component={About}/>
        <Route path="/pozovipredstavnika" component={ManagerAdd}/>

      </Switch>

    </Router>

  )
}

export default App