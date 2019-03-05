import React, {Component} from 'react';
import {
  Button,
  Card,
  Col,
  Row,
  CardHeader,
  CardFooter, Badge
} from "reactstrap";
import style from './MovieCard.module.scss'
import VideoModal from "../VideoModal/VideoModal";
import cx from 'classnames';

class MovieCard extends Component {
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
            <Button outline={true} size={'sm'} >Catalog</Button>
          </a>
        </div>
      )
    }
  }

  getKeywords() {
    return this.props.movie.keywords.map((keyword) => {
      return (
        <Badge key={keyword.id} color="primary" className={style.MovieCardKeyword}>{keyword.keyword}</Badge>
      )
    });
  }

  getThumbnailImage() {
    if(this.props.movie.thumbnail) {
      return (
          <div
              className={style.MovieCardImage}
              style={{
                backgroundImage: `url(${this.props.movie.thumbnail})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}>

          </div>
      );
    } else {
      return(
          <div className={style.MovieCardImage}>
            <div className={style.MovieIcon}>
              <i className='fas fa-film'> </i>
            </div>
          </div>
      )
    }
  }

  getTemporalCoverage() {
    let dates = [this.props.movie.temporal_coverage_start];
    if(this.props.movie.temporal_coverage_end) {
      dates.push(this.props.movie.temporal_coverage_end);
    }
    return dates.join(' - ')
  }

  render() {
    return (
      <Card className={style.MovieCard}>
        <CardHeader className={style.MovieCardHeader}>{this.props.movie.title}</CardHeader>
        <Col xs={12}>
          <Row>
            <Col xs={12} md={4} className={style.MovieThumbnail}>
              {this.getThumbnailImage()}
            </Col>
            <Col xs={12} md={8} className={style.MovieCardContentContainer}>
              <div className={style.MovieCardContent + ' pull-left'}>
                <div className={style.Directors}>
                  <i>Directed by: </i> {this.getDirectors()}
                </div>
                <div className={style.Countries}>
                  <i>{this.getCountries()}</i>
                </div>
                <div className={style.Coverage}>
                  <i>Temporal coverage: </i> {this.getTemporalCoverage()}
                </div>
                <div className={style.Abstract}>
                  {this.props.movie.abstract}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <CardFooter className={style.MovieCardFooter}>
          {this.getKeywords()}
          {this.getTrailer()}
        </CardFooter>
      </Card>
    )
  }
}

export default MovieCard;