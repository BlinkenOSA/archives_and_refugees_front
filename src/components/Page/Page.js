import React from 'react';
import {Col, Container, Row} from "reactstrap";
import ResponsiveMap from "../../containers/Map/ResponsiveMap";
import RecordsSection from "../../containers/Records/RecordsSection";
import './Page.css'
import Navigation from "../Navbar/Navbar";
import DateSlider from "../../containers/DateSlider/DateSlider";

function Page(props) {
  return (
    <div className={props.root}>
      <Navigation/>
      <Container className={'content'} fluid={true}>
        <Row>
          <Col md={6} className={'map p-0'}>
            <ResponsiveMap/>
          </Col>
          <Col md={6}>
            <RecordsSection/>
          </Col>
        </Row>
      </Container>
      <footer>
        <Row>
          <Col md={12}>
            <DateSlider/>
          </Col>
        </Row>
      </footer>
    </div>
  )
}

export default Page;
