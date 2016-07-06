
import React from 'react';
import { Link } from 'react-router';

import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem, Image
} from 'react-bootstrap';

const TopNav = React.createClass({
  render() {
    return(
      <div id="navbar">
        <Navbar fluid fixedTop default>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">BlackJack</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="patmedersen" id="basic-nav-dropdown">
                {/*
                <Navbar.Text>
                  <Image className="profile-img" src="http://i2.wp.com/www.geekstogo.com/forum/public/style_images/shift/profile/default_large.png" circle />
                </Navbar.Text>
                */}
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
});

export default TopNav;