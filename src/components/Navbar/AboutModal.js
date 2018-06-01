import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink} from 'reactstrap';

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
        <NavLink color="danger" onClick={this.toggle}>{this.props.buttonLabel}</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size={'lg'}>
          <ModalHeader toggle={this.toggle}>Archives & Refugees - Map of Migrant and Refugee Films</ModalHeader>
          <ModalBody>
            The OSA Film Library contains 4,000+ documentary and propaganda films as well as selected fiction.
            Of the thousands of films, several hundred relate directly to the diverse and dynamic experience of
            refugees and migrants at varying stages of their journey. In this map, we have provided a geographic
            visualization of these films, allowing researchers to more easily find films based on: origin country
            of the refugee/migrant, time period, and type of refugee/migrant experience. All films are in English or
            have English subtitles.</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AboutModal;