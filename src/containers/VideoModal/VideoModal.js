import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ButtonGroup, ModalHeader} from 'reactstrap';
import style from './VideoModal.module.scss'

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
          <a href={this.props.movie.catalog_url} target={'_blank'} className={'btn btn-outline-secondary btn-sm'}>Catalog</a>
          <Button outline={true} size={'sm'} onClick={this.toggle}> Watch Trailer</Button>
        </ButtonGroup>
        <Modal isOpen={this.state.modal} toggle={this.toggle} contentClassName={style.ModalContent} size={'lg'}>
          <ModalHeader toggle={this.toggle} className={style.ModalHeader}>{this.props.movie.title} - Movie Trailer</ModalHeader>
          <ModalBody className={style.ModalBody}>
            <iframe width="798" height="365" title={this.props.movie.title}
                    src={this.props.movie.trailer_embed_url}
                    frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen> </iframe>
          </ModalBody>
          <ModalFooter className={style.ModalFooter}>
            <Button color="secondary" onClick={this.toggle} size={'sm'}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default VideoModal;