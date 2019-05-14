import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink} from 'reactstrap';
import style from "./AboutModal.module.scss"
import {Row, Col} from "reactstrap";

class AboutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <NavLink className={style.NavLink} onClick={this.toggle}>{this.props.buttonLabel}</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} contentClassName={style.ModalContent} size={'lg'}>
          <ModalHeader toggle={this.toggle} className={style.ModalHeader}>Refugee DocsMap - Map of Migrant and Refugee Films</ModalHeader>
          <ModalBody>
            <Row>
              <Col xs={12}>
                <p>
                  The non-circulating Film Library of the Vera and Donald Blinken Open Society Archives contains 5,500+
                  documentary films focusing on current social injustices and international human rights violations in
                  almost 100 languages, including all films submitted to the Verzio International Human Rights
                  Documentary Film Festival since 2003.
                </p>
                <p>
                  Within this unparalleled range of films, several hundred relate directly to the global experience of
                  forcibly displaced people, refugees and migrants, featured at varying stages of their journey.
                  In this interactive map, we have provided a visual geographic catalog of these selected films,
                  allowing researchers to more easily locate films based on the origin country of the refugee/migrant,
                  as well as the time period and nature of their experiences.
                </p>
                <p>
                  For users of this visual catalog: the country of origin designates the location where the refugee’s
                  journeys started, while the temporal coverage refers to the time span covered in the refugees’
                  account of their experience. The keywords used to more specifically describe the films derive
                  from the UNHCR’s Master Glossary of Terms.
                </p>
                <p>
                  This approach puts the personal, unique story of the refugees at the forefront of the inquiry.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h5 className={style.H5Title}>
                  Project team members
                </h5>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <h6 className={style.H6Title}>
                  Interns
                </h6>
                <p>
                  Katie Lynch, George Mason University (2017)<br/>
                  Andrew Millin, George Mason University (2018)<br/>
                  Melissa Pennett, George Mason University (2019)<br/>
                  Mandula van den Berg, Bard College Berlin (2018-2019)<br/>
                </p>
              </Col>
              <Col xs={6}>
                <h6 className={style.H6Title}>
                  ICT
                </h6>
                <p>
                  József Gábor Bóné, Blinken OSA
                </p>
                <h6 className={style.H6Title}>
                  Lead
                </h6>
                <p>
                  Csaba Szilágyi, Blinken OSA
                </p>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter className={style.ModalFooter}>
            <Button outline={true} color="secondary" size={'sm'} onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AboutModal;