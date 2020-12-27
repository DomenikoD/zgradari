import React from "react";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import BuildingOverview from "../building/BuildingOverview";
import ProjectOverview from "../project/ProjectOverview";
import PollOverview from "../poll/PollOverview";
import FinanceOverview from "../finance/FinanceOverview";
import PaymentsOverview from "../payments/PaymentsOverview";
import TenantOverview from "../tenant/TenantOverview";
import InfosOverview from "../communication/InfosOverview";
import SettingsOverview from "../settings/SettingsOverview";
import BillingOverview from "../billing/BillingOverview";
import DocumentsOverview from "../documents/DocumentsOverview";

const ConsoleSideBar = (props) => {
  const buidling = {
    buildingName: "Vatroslava Jagića",
    buildingAddress: "Vatroslava Jagića 25-31",
    manager: { name: "Domeniko", phone: "1234" },
  };

  return (
    <div>
      {console.log("RENDER ConsoleSideBar")}

      <div className="izborbnik bocni">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="building overview"
        >
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
                <Nav.Item hidden={!props.userInfo.isAdmin}>
                  <Nav.Link eventKey="payments">Plaćanja</Nav.Link>
                </Nav.Item>
                <Nav.Item hidden={!props.userInfo.isAdmin}>
                  <Nav.Link eventKey="tenants">Stanari</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="infos">Obavijesti</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="documents">Dokumenti</Nav.Link>
                </Nav.Item>
                <Nav.Item hidden={!props.userInfo.isAdmin}>
                  <Nav.Link eventKey="settings">Postavke</Nav.Link>
                </Nav.Item>
                <Nav.Item hidden={!props.userInfo.isAdmin}>
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
                  <TenantOverview building={buidling} />
                </Tab.Pane>
                <Tab.Pane eventKey="infos">
                  <InfosOverview
                    building={buidling}
                    userInfo={props.userInfo}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="documents">
                  <DocumentsOverview
                    building={buidling}
                    userInfo={props.userInfo}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="settings">
                  <SettingsOverview building={buidling} />
                </Tab.Pane>
                <Tab.Pane eventKey="billing">
                  <BillingOverview building={buidling} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      {console.log("RENDER ConsoleSideBar FIN")}
    </div>
  );
};

export default ConsoleSideBar;
