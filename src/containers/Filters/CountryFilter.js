import React, { Component } from "react";
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import axios from 'axios';
import {GET_COUNTRIES} from "../../config";
import selectCountry from "./actions/selectCountry";
import {connect} from "react-redux";
import selectRecords from "../Records/actions/selectRecords";
import selectKeyword from "./actions/selectKeyword";


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
    selectRecords({country: country})
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
  return { selectedCountry: state.countryFilter.selectedCountry }
};

export default connect(mapStateToProps)(CountryFilter);
