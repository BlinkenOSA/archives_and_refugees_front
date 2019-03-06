import React, {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import AboutModal from "./AboutModal";
import style from './Navbar.module.scss';
import logo from '../../assets/img/osa_logo.png';

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
      <Navbar className={style.Navbar} dark fixed="top" expand="md">
        <NavbarBrand
          href={'#'}
          className={style.NavbarBrand}
        >
          <img src={logo} alt={'Blinken OSA Archivum'} className={style.NavBarBrandIcon} />
            <span className={style.NavbarBrandText}>Vera & Donald Blinken Open Society Archives - </span>Refugee DocMap
        </NavbarBrand>
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

