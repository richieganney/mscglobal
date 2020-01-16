import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MSC from '../photos_and_videos/new_logo.png'

class NavBar extends Component {
    render() {
        return (
            <div id="navBar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                <img
                    src={MSC}
                    alt="Squash Logo"
                    className="rounded-circle z-depth-1 img-fluid"
                    width={45}
                    height={10}
                />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <div id="tables"><Nav.Link href="/tables">Tables</Nav.Link></div>
                    <div id="seasonHighlights"><NavDropdown title="Season Highlights" id="collasible-nav-dropdown">
                    <NavDropdown.Item id="sOne"href="/season/18-19">2018/2019</NavDropdown.Item>
                    </NavDropdown></div>
                    </Nav>
                    <Nav>
                    <div id="allTeams"><Nav.Link href="/all-teams">All Teams</Nav.Link></div>
                    <div id="about"><Nav.Link eventKey={2} href="/about">
                    About
                    </Nav.Link></div>
                    <div id="social-info"><Nav.Link eventKey={2} href="/social-info">
                    Social Info
                    </Nav.Link></div>
                    <div id="match-reports"><Nav.Link eventKey={2} href="/match-reports">
                    Match Reports
                    </Nav.Link></div>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;