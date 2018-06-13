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
            The Film Library of the Vera and Donald Blinken Open Society Archives contains 4,500+ documentary films
            focusing on current social issues and international human rights in almost 100 languages,
            including all films submitted to the Verzio International Human Rights Documentary Film Festival.<br/><br/>
            Of this unparalleled range of films, several hundred relate directly to the global experience of forcibly
            displaced people, refugees and migrants, featured at varying stages of their journey. In this interactive
            map, we have provided a visual geographic catalog of these selected films, allowing researchers to more
            easily find films based on the origin country of the refugee/migrant, as well as the time period and type
            of refugee/migrant experience</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AboutModal;