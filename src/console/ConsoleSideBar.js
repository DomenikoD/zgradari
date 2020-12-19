import React from "react";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import BuildingOverview from "../building/BuildingOverview";
import ProjectOverview from "../project/ProjectOverview";
import PollOverview from "../poll/PollOverview";
import FinanceOverview from "../finance/FinanceOverview";
import PaymentsOverview from "../payments/PaymentsOverview";

const ConsoleSideBar = () => {
  const buidling = {
    buildingName: "Vatroslava Jagića",
    buildingAddress: "Vatroslava Jagića 25-31",
    manager: { name: "Domeniko", phone:"1234" }
  };

  return (
    <div>
      <div className="izborbnik bocni">
        <Tab.Container id="left-tabs-example" defaultActiveKey="building overview">
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
                  <BuildingOverview building={buidling} />
                </Tab.Pane>
                <Tab.Pane eventKey="projects">
                  <ProjectOverview building={buidling} />
                </Tab.Pane>
                <Tab.Pane eventKey="queries">
                <PollOverview building={buidling} />
                </Tab.Pane>
                <Tab.Pane eventKey="building money">
                <FinanceOverview building={buidling} />
                </Tab.Pane>
                <Tab.Pane eventKey="payments">
                <PaymentsOverview building={buidling} />
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
