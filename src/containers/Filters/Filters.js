import React, { Component } from "react";
import {Col, Navbar} from "reactstrap";
import CountryFilter from "./CountryFilter";
import KeywordFilter from "./KeywordFilter";

import style from './Filters.module.scss'

class Filters extends Component {
  render() {
    return (
      <Navbar expand="md" className={style.FilterNavbar}>
          <Col xs={5} className={style.FilterContainer}>
            <CountryFilter/>
          </Col>
          <Col xs={2} className={style.FilterOrText}>
            <span>- OR -</span>
          </Col>
          <Col xs={5} className={style.FilterContainer}>
            <KeywordFilter/>
          </Col>
      </Navbar>
    )
  }
}

export default Filters;