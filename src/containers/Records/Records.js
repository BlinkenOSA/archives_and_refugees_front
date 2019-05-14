
import React, { Component } from "react";
import {Col, Row} from "reactstrap";
import {connect} from "react-redux";
import selectRecords from "./actions/selectRecords";
import style from "./Records.module.scss";
import {MovieListSpinner} from "../Spinner/MovieListSpinner";
import MovieCard from "./MovieCard";
import addRecords from "./actions/addRecords";

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:  800,
      height: 182,
    };
    this.myRef = React.createRef();
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions = () => {
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
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {next} = this.props;
    /*
    if(prevProps.next !== next) {
      if(next) {
        if (next.includes('offset=10')) {
          this.myRef.current.scrollTo(0, 0);
        }
      } else {
        this.myRef.current.scrollTo(0, 0);
      }
    }
    */
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    selectRecords()
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  onScroll = (e) => {
    const {next} = this.props;
    const {height} = this.state;
    const element = e.target;
    if (element.scrollHeight-element.scrollTop === height) {
      if (next) {
        addRecords(next)
      }
    }
  };

  render() {
    const {height} = this.state;
    const {records, loading} = this.props;

    return (
      <div
        style={{ height: height }}
        className={style.RecordsContainer}
        onScroll={this.onScroll}
      >
        <Col xs={12}>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    next: state.recordsReducer.next,
    records: state.recordsReducer.records,
    loading: state.recordsReducer.loading
  }
};

export default connect(mapStateToProps)(Records);