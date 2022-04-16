import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" className='mb-5' expand="lg" bg="info" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home"><span className='menu'>Home</span></Nav.Link>
              <Nav.Link href="/blog"><span className='menu'>Blog</span></Nav.Link>
              <Nav.Link href="/about"><span className='menu'>About</span></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">
                <button className='btn btn-danger'>Login</button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
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