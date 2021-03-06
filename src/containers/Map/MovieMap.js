import React, {Component} from 'react';
import axios from "axios/index";
import {GET_COUNTRIES} from "../../config";
import Map from "./Map";
import selectMarkers from "./actions/selectMarkers";


class MovieMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initCountry: "Syria",
      initLat: 33.510414,
      initLong: 36.278336,
      countries: []
    }
  }

  componentDidMount() {
    this.getMarkers()
  }

  getMarkers() {
    axios.get(GET_COUNTRIES).then((response) => {
      const markers = response.data.map((country) => {
        return {
          value: country.id,
          label: country.country,
          latitude: country.latitude,
          longitude: country.longitude,
          total: country.total_number_of_films
        }
      });
      selectMarkers(markers)
    });
  }

  render() {
    return (
      <Map {...this.props} lat={this.state.initLat} long={this.state.initLong} />
    )
  }
}

export default MovieMap;