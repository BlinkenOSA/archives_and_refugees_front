import React, { Component } from "react";
import {Col, Navbar} from "reactstrap";
import CountryFilter from "./CountryFilter";
import KeywordFilter from "./KeywordFilter";
import './Filters.css'

class Filters extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md" className={'pl-0 pr-0'}>
          <Col xs={5}>
            <CountryFilter/>
          </Col>
          <Col xs={2} className={'Filter_or'}>
            <span>- OR -</span>
          </Col>
          <Col xs={5}>
            <KeywordFilter/>
          </Col>
      </Navbar>
    )
  }
}

export default Filters;