import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";


export function Atas () {
   
        return(
            <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#">Syaf News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        )
    }


