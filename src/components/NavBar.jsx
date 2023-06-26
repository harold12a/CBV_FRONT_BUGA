import React from "react";
import { Link as Anchor } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Anchor to='/' className="w-[50px] mr-2" href="#">
          {" "}
          <img src="/public/images/logo2.jpg" alt="logo" />{" "}
        </Anchor>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Anchor to='/' className="mt-2" >Inicio</Anchor>
            <Nav.Link  >Noticias</Nav.Link>
            <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cursos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Carreras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Servicios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Capacitaciones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ventas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Anchor to='/ingresar' className="rounded-full bg-red-600 w-[15vh] h-[5vh] text-white text-center pt-2 mr-4 ">Ingresar</Anchor>
            <Anchor  to='/register' className="rounded-full bg-red-600 w-[15vh] h-[5vh] text-white text-center pt-2 mr-4 ">Registrarme</Anchor>
            <Anchor to='/' eventKey={2} className="rounded-full bg-red-600 w-[15vh] h-[5vh] text-white text-center pt-2 " >
             Salir
            </Anchor>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
