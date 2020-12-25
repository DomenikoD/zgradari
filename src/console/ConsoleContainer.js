import React from "react";
import { Button } from "react-bootstrap";
import ConsoleNavigationContainer from './ConsoleNavigationContainer'
import ConsoleMainView from './ConsoleMainView'

const userInfo = {isManager:true}
const content = {type: "overview"}

const ConsoleContainer = () => {
  return (
    <div>
      <h1>Component ConsoleContainer</h1>
      <h2>Component  NavigationContainer</h2>
      <h3>Component ConsoleNavigationList ManagerNavi</h3>
      <h3>Component ConsoleNavigationList TenantNavi</h3>
      <h2>ConsloleMainView</h2>
      <h3>Component Header</h3>
      <h3>Component AddEdit</h3>
      <h3>Component Table</h3>

      <div>
        <ConsoleNavigationContainer userInfo={userInfo} />
        <ConsoleMainView content={content}/>
    </div>

    </div>
  );
};

export default ConsoleContainer;
