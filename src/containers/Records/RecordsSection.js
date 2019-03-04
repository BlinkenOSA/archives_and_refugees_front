import React, { Component } from "react";
import Records from "./Records";
import {Col, Row} from "reactstrap";
import Filters from "../Filters/Filters";

import style from "./RecordsSection.module.scss";

class RecordsSection extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <Filters/>
          </Col>
          <Col xs={12} className={style.RecordsContainer}>
            <Records/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default RecordsSection;