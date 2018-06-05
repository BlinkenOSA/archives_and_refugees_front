import React, {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import AboutModal from "./AboutModal";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark fixed="top" expand="md">
        <NavbarBrand href="/">Map of Migrant and Refugee Films</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <AboutModal buttonLabel={'About the project'}/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navigation;

