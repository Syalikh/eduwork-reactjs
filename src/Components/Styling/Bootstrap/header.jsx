import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";


export default function AppHeader ()  {
     {    
        return(
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Syalikh Fadin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#biografi">Biografi</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        )
    }
  }

