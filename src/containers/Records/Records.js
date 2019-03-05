
import React, { Component } from "react";
import MovieCard from "./MovieCard";
import {Col, Row} from "reactstrap";
import {connect} from "react-redux";
import selectRecords from "./actions/selectRecords";
import style from "./Records.module.scss";
import {MovieListSpinner} from "../Spinner/MovieListSpinner";

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
        height: window.innerHeight-300 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = window.innerHeight-184;
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
    selectRecords()
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  render() {
    const {height} = this.state;
    const {records, loading} = this.props;

    return (
      <Col xs={12} style={{ height: height }} className={style.RecordsContainer}>
        {loading ? <MovieListSpinner/> : ''}
        <div>
          <Row>
            {records.map((movie, idx) => {
              return (
                <Col key={idx} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              )
            })}
          </Row>
        </div>
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    records: state.recordsReducer.records,
    loading: state.recordsReducer.loading
  }
};

export default connect(mapStateToProps)(Records);