import React, { Component } from "react";
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import axios from 'axios';
import {GET_COUNTRIES} from "../../config";
import selectCountry from "./actions/selectCountry";
import {connect} from "react-redux";
import selectRecords from "../Records/actions/selectRecords";


class CountryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };

    this.saveChanges = this.saveChanges.bind(this)
  }

  componentDidMount() {
    axios.get(GET_COUNTRIES).then((response) => {
      this.setState({
        ...this.state,
        countries: response.data.map((country) => {
          return {
            value: country.id,
            label: country.country,
            latitude: country.latitude,
            longitude: country.longitude
          }
        })
      });
    });
  }

  saveChanges(value) {
    let country;
    country = value ? value.value : null;
    selectCountry(value);
    selectRecords({
      country: country,
      date_from: this.props.date_from,
      date_to: this.props.date_to
    })
  }

  render() {
    return(
      <Select
        options={this.state.countries}
        placeholder={"Select Country..."}
        value={this.props.selectedCountry}
        onChange={this.saveChanges}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countryFilter.selectedCountry,
    date_from: state.dateSlider.date_from,
    date_to: state.dateSlider.date_to
  }
};

export default connect(mapStateToProps)(CountryFilter);
