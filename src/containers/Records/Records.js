
import React, { Component } from "react";
import MovieCard from "./MovieCard";
import {Col, Row} from "reactstrap";
import {connect} from "react-redux";
import selectRecords from "./actions/selectRecords";
import {RingLoader} from "react-spinners";

class Records extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width:  800,
      height: 182,
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({
        width: 450,
        height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = window.innerHeight-168;
      this.setState({
        width: update_width,
        height: update_height });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    selectRecords();
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div className={'mapcontent'} style={{ height: this.state.height }}>
        <Row>
        {this.props.records.map(function(movie, idx) {
          return (
            <Col key={idx} xs={12}>
              <MovieCard movie={movie} />
            </Col>
          )
        })}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countryFilter.selectedCountry,
    selectedKeyword: state.keywordFilter.selectedKeyword,
    records: state.recordsReducer.records
  }
};

export default connect(mapStateToProps)(Records);