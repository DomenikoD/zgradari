/* src/App.js */
import React from "react";
import Amplify from "aws-amplify";

import Home from "./home/Home";
import TODO from "./temp/TODO";
import About from "./about/About";
import ManagerAdd from "./manager/ManagerAdd";
import TenantMain from "./tenant/TenantMain";
import ManagerMain from "./manager/ManagerMain";
import AdminOverview from './admin/AdminOverview';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pocetna" component={TODO} />
        <Route path="/prijava" component={TODO} />
        <Route path="/registracija" component={TODO} />
        <Route path="/onama" component={About} />
        <Route path="/pozovipredstavnika" component={ManagerAdd} />
        <Route path="/upravitelj" component={ManagerMain} />
        <Route path="/vlasnik" component={TenantMain} />
        <Route path="/admin" component={AdminOverview} />
      </Switch>
    </Router>

   /* 
<div>
  IN WORK
</div>
*/
  );
};

export default App;
