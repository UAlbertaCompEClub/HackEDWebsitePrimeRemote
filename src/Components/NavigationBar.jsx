import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        return (
            <Navbar>    
                <Nav>
                    <NavItem eventKey={1} href="#about">
                    About
                    </NavItem>
                    <NavItem eventKey={2} href="#FAQ">
                    FAQ
                    </NavItem>
                    <NavItem eventKey={3} href="#Sponsors">
                    Sponsors
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

}

export default Header;