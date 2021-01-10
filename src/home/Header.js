import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {console.log("RENDER Header")}

      <Navbar sticky="top" bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>ZGRADARI</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/onama">O nama</Nav.Link>
            <Nav.Link href="/prijava">Prijava</Nav.Link>
            <NavDropdown title="Počni odavde" id="basic-nav-dropdown">
              <NavDropdown.Item href="/registracija">
                Registriraj se!
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/pozovipredstavnika">
                Pozovi predstavnika zgrade
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/prijava">Javi se nama</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/upravitelj">Upravitelj - sučelje</Nav.Link>
            <Nav.Link href="/vlasnik">Vlasnik - sučelje</Nav.Link>
            <Nav.Link href="/iskustva-zgradara">Iskustva</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Adresa" className="mr-sm-2" />
            <Button variant="outline-success">Pronađi svoju zgradu</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
