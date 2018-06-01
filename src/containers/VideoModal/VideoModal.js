import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup} from 'reactstrap';
import './VideoModal.css'

class VideoModal extends React.Component {
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
        <ButtonGroup>
          <a href={this.props.movie.catalog_url} target={'_blank'} className={'btn btn-info btn-sm'}>Catalog</a>
          <Button size={'sm'} onClick={this.toggle}> Watch Trailer</Button>
        </ButtonGroup>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size={'lg'}>
          <ModalBody className="VideoModal_modalbody">
            <iframe width="798" height="365"
                    src={this.props.movie.trailer_embed_url}
                    frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle} size={'sm'}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default VideoModal;