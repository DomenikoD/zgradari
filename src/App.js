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
import BlogOverview from './blog/BlogOverview';
import SignIn from './auth/SignIn'
import SignUp from './auth/Signup'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pocetna" component={TODO} />
        <Route path="/prijava" component={SignIn} />
        <Route path="/registracija" component={SignUp} />
        <Route path="/onama" component={About} />
        <Route path="/pozovipredstavnika" component={ManagerAdd} />
        <Route path="/upravitelj" component={ManagerMain} />
        <Route path="/vlasnik" component={TenantMain} />
        <Route path="/admin" component={AdminOverview} />
        <Route path="/iskustva-zgradara" component={BlogOverview} />
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
