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
                  The Film Library of the Vera and Donald Blinken Open Society Archives contains 5,500+ documentary films
                  focusing on current social issues and international human rights in almost 100 languages, including all
                  films submitted to the Verzio International Human Rights Documentary Film Festival since 2003.
                </p>
                <p>Of this unparalleled range of films, several hundred relate directly to the global experience of forcibly
                  displaced people, refugees and migrants, featured at varying stages of their journey.
                  In this interactive map, we have provided a visual geographic catalog of these selected films, allowing
                  researchers to more easily find films based on the origin country of the refugee/migrant, as well as
                  the time period and type of refugee experience. This approach puts the personal story of the refugees
                  at the forefront of the inquiry.
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