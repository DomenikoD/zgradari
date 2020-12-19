import React from 'react'
import { Button, ListGroup,Tabs, Tab,ProgressBar } from 'react-bootstrap';
import CommentsList from '../comment/CommentsList'


const PollOverview = (props) => {
  
  function alertClicked() {
    
  }
  return(
    <div >
    <h1>Ankete zgrade {props.building.buildingName}</h1>
    <p>Adresa: {props.building.buildingAddress}</p>
    <p>Predstavnik: {props.building.manager.name}</p>
    <p>Kontakt: {props.building.manager.phone}</p>

<div className="poll list" >
<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="active" title="Aktivne">
  <ListGroup className="flex-column" defaultActiveKey="#link1" >
  <ListGroup.Item action href="#link1">
    Želite li uređenje parka<ProgressBar  now={40} />
  </ListGroup.Item>
  <ListGroup.Item action href="#link2" disabled>
    Smatrate li da treba nova...<ProgressBar  now={60} />
  </ListGroup.Item>
  <ListGroup.Item action onClick={alertClicked(``)}>
    Želimo novo...<ProgressBar  now={100} />
  </ListGroup.Item>
  <ListGroup.Item action onClick={alertClicked(``)}>
    Kako ste zadovoljni projektom "BlaBla"<ProgressBar  now={8} />
  </ListGroup.Item>
</ListGroup>

  </Tab>
  <Tab eventKey="finished" title="Završene">
  <ListGroup className="flex-column" defaultActiveKey="#link1" >
  <ListGroup.Item action href="#link1">
    Želite li uređenje parka
  </ListGroup.Item>
  <ListGroup.Item action href="#link2" disabled>
    Smatrate li da treba nova...
  </ListGroup.Item>
  <ListGroup.Item action onClick={alertClicked(``)}>
    Želimo novo...
  </ListGroup.Item>
  <ListGroup.Item action onClick={alertClicked(``)}>
    Kako ste zadovoljni projektom "BlaBla"
  </ListGroup.Item>
  <ListGroup.Item action onClick={alertClicked(``)}>
    Kako ste zadovoljni izvođačem "BlaBla"
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
  </Tab>
  <Tab eventKey="all" title="Sve" >
  <ListGroup className="flex-column" defaultActiveKey="#link1" >
  <ListGroup.Item action href="#link1">
    Želite li uređenje parka
  </ListGroup.Item>
  <ListGroup.Item action href="#link2" disabled>
    Smatrate li da treba nova...
  </ListGroup.Item>
  <ListGroup.Item action onClick={alertClicked(``)}>
    Želimo novo...
  </ListGroup.Item>
  <ListGroup.Item action onClick={alertClicked(``)}>
    Kako ste zadovoljni projektom "BlaBla"
  </ListGroup.Item>
  <ListGroup.Item action onClick={alertClicked(``)}>
    Kako ste zadovoljni izvođačem "BlaBla"
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

  </Tab>
</Tabs>


</div>
<p></p>

  <h5>Komentari ankete "Želimo novo..."</h5>
  <p></p>
  <h5>Komentari</h5>
  <CommentsList/>
  </div>
  )

}



export default PollOverview