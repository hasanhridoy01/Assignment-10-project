import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><span className='menu'>Home</span></Nav.Link>
              <Nav.Link href="#features"><span className='menu'>Blog</span></Nav.Link>
              <Nav.Link href="#pricing"><span className='menu'>About</span></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <button className='btn btn-danger'>Login</button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <button className='btn btn-danger'>Sign Out</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;