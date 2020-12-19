import React from "react";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import BuildingOverview from "./BuildingOverview";
import ProjectOverview from "./ProjectOverview";

const ConsoleSideBar = () => {
  return (
    <div>
      <div className="izborbnik bocni">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="building overview">
                    Pregled zgrade
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="projects">Projekti</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="queries">Ankete</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="building money">Pričuva</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="payments">Plačanja</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tenants">Stanari</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="infos">Obavijesti</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="settings">Postavke</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="billing">Naplata</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="building overview">
                  <BuildingOverview />
                </Tab.Pane>
                <Tab.Pane eventKey="projects">
                <ProjectOverview />
                </Tab.Pane>
                <Tab.Pane eventKey="queries">
                  <p>asdf</p>
                </Tab.Pane>
                <Tab.Pane eventKey="building money">
                  <p>asdf</p>
                </Tab.Pane>
                <Tab.Pane eventKey="payments">
                  <p>asdf</p>
                </Tab.Pane>
                <Tab.Pane eventKey="tenants">
                  <p>asdf</p>
                </Tab.Pane>
                <Tab.Pane eventKey="infos">
                  <p>asdf</p>
                </Tab.Pane>
                <Tab.Pane eventKey="settings">
                  <p>asdf</p>
                </Tab.Pane>
                <Tab.Pane eventKey="billing">
                  <p>asdf</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default ConsoleSideBar;
