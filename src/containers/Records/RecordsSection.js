import React, { Component } from "react";
import Records from "./Records";
import {Col, Row} from "reactstrap";
import Filters from "../Filters/Filters";

class RecordsSection extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} className={'p-0'}>
            <Filters/>
          </Col>
          <Col xs={12}>
            <Records/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default RecordsSection;