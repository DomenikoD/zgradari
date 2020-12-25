import React from "react";
import { Button } from "react-bootstrap";
import Header from './mainview/Header'
import AddEdit from './mainview/AddEdit'
import Table from './mainview/Table'
const ConsoleMainView = (props) => {
  return (
    <div>
      <Header headerContent={props.headerContent}/>
      <AddEdit addEditContent={props.addEditContent}/>
      <Table content={props.tableContent}/>
    </div>
  );
};

export default ConsoleMainView;
