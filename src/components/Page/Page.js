import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Navigation from "../Navbar/Navbar";
import DateSlider from "../../containers/DateSlider/DateSlider";
import {Spinner} from "../../containers/Spinner/Spinner";
import Loadable from 'react-loadable';
import style from './Page.module.scss';

const loading = () => {
    return(
        <Spinner/>
    )
};

// Forgot Password
const ResponsiveMap = Loadable({
    loader: () => import('../../containers/Map/ResponsiveMap'),
    loading
});

const RecordsSection = Loadable({
    loader: () => import('../../containers/Records/RecordsSection'),
    loading
});

function Page(props) {
  return (
    <div className={props.root}>
      <Navigation/>
      <Container className={style.Content} fluid={true}>
        <Row>
          <Col xs={12} md={12} lg={6} className={style.Map}>
            <ResponsiveMap/>
          </Col>
          <Col xs={12} md={12} lg={6} className={style.Records}>
            <RecordsSection/>
          </Col>
        </Row>
      </Container>
      <footer className={style.Footer}>
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
