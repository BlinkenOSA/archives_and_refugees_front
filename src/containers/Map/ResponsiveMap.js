import React, { Component } from 'react';
import MovieMap from "./MovieMap";
import {Collapse} from "reactstrap";

class ResponsiveMap extends Component {

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
        height: 150 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = window.innerHeight-126;
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
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <MovieMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCDgmgCQu4rfe1wPtjyTvQWOmRitZ8pejo&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={ <div style={{ height: this.state.height }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    )
  }
}

export default ResponsiveMap;