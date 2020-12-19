import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import CommentsList from './CommentsList'


const ProjectOverview = (props) => {
  
  function alertClicked() {
    
  }

  return(
    <div >
      <h1>Projekti zgrade {props.building.buildingName}</h1>
      <p>Adresa: {props.building.buildingAddress}</p>
      <p>Predstavnik: {props.building.manager.name}</p>
      <p>Kontakt: {props.building.manager.phone}</p>

<div className="projects list" >
<ListGroup className="flex-column" defaultActiveKey="#link1" >
    <ListGroup.Item action href="#link1">
      Uređenje stubišta
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
      Godišnji servis dizala
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked(``)}>
      Projekt 3
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked(``)}>
      Projekt 4
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked(``)}>
      Projekt 5
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked(``)}>
      Projekt 6
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked(``)}>
      Projekt 7
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked(``)}>
      Projekt 8
    </ListGroup.Item>
  </ListGroup>
</div>
<p></p>

    <h5>Pregled projekta: Uređenje stubišta</h5>
    <p></p>
    <h5>Komentari</h5>
    <CommentsList/>
    </div>
  )

}



export default ProjectOverview