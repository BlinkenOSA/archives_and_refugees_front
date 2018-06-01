import React, {Component} from 'react';
import {
  Button,
  Card,
  Col,
  Row,
  CardHeader,
  CardFooter, Badge, ButtonGroup
} from "reactstrap";
import './MovieCard.css'
import VideoModal from "../VideoModal/VideoModal";

class MovieCard extends Component {
  constructor(props) {
    super(props)
  }

  getDirectors() {
    let directors = this.props.movie.directors.map((director) => {
      return director.director
    });
    return directors.join('; ')
  }

  getCountries() {
    let countries = this.props.movie.countries.map((country) => {
      return country.country
    });
    return countries.join('; ')
  }

  getTrailer() {
    if(this.props.movie.trailer_url) {
      return (
        <div className="float-right">
          <VideoModal movie={this.props.movie} className={'VideoModal'}/>
        </div>
      )
    } else {
      return (
        <div className="float-right">
          <a href={this.props.movie.catalog_url} target={'_blank'}>
            <Button size={'sm'} color='info'>Catalog</Button>
          </a>
        </div>
      )
    }
  }

  getKeywords() {
    return this.props.movie.keywords.map((keyword) => {
      return (
        <Badge key={keyword.id} color="info" className={'MovieCard_keyword'}>{keyword.keyword}</Badge>
      )
    });
  }

  getThumbnailImage() {
    if(this.props.movie.thumbnail_url) {
      return {
        backgroundImage: `url(${this.props.movie.thumbnail_url})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }
    }
  }

  render() {
    return (
      <Card className="MovieCard">
        <CardHeader>{this.props.movie.title}</CardHeader>
        <Row>
          <Col xs={4} className={'p-0'}>
            <div className="MovieCard_image" style={this.getThumbnailImage()}> </div>
          </Col>
          <Col xs={8}>
            <div className="MovieCard_content pull-left">
              <div className="MovieCard_director">
                <i>Directed by: </i> {this.getDirectors()}
              </div>
              <div className="MovieCard_info">
                <i>{this.getCountries()}</i>
              </div>
              <div className="MovieCard_abstract pt-2">
                {this.props.movie.abstract}
              </div>
            </div>
          </Col>
        </Row>
        <CardFooter>
          {this.getKeywords()}
          {this.getTrailer()}
        </CardFooter>
      </Card>
    )
  }
}

export default MovieCard;