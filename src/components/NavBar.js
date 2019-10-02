import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Squash from '../photos_and_videos/squash.jpg'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                <img
                    src={Squash}
                    alt="Squash Logo"
                    className="rounded-circle z-depth-1 img-fluid"
                    width={40}
                    height={20}
                />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/tables">Tables & Results</Nav.Link>
                    <NavDropdown title="Season Highlights" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/season/18-19">2018/2019</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/all-teams">All Teams</Nav.Link>
                    <Nav.Link eventKey={2} href="/about">
                    About
                    </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;