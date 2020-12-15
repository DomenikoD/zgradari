import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form,FormControl } from 'react-bootstrap';


const Header = () => {
  

  return(
    <div >

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">ZGRADARI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Početna</Nav.Link>
            <Nav.Link href="#link">Prijava</Nav.Link>
            <Nav.Link href="#link">Registracija</Nav.Link>
            <NavDropdown title="Kako krenuti" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pozovi predstavnika zgrade</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">O nama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Adresa" className="mr-sm-2" />
                <Button variant="outline-success">Pronađi svoju zgradu</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )

}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 20 },
  manager: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  managerName: { fontSize: 20, fontWeight: 'bold' },
  managerInfo: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default Header