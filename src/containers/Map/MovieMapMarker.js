import React from 'react';
import {Marker} from 'react-google-maps';
import selectCountry from "../Filters/actions/selectCountry";
import selectRecords from "../Records/actions/selectRecords";

import {palette} from '../../config/colors';
import {connect} from "react-redux";

const MovieMapMarker = (props) => {
  const country = props.country;

  const onMarkerClick = (evt) => {
    selectCountry(country);
    selectRecords({
      country: country.value,
      date_from: props.date_from,
      date_to: props.date_to
    })
  };

  function getIcon(label) {
    const selectedCountry = props.selectedCountry;
    let selectedCountryValue;
    let fillColor, fontColor;

    if (selectedCountry) {
      selectedCountryValue = selectedCountry.hasOwnProperty('value') ? selectedCountry.value : '0';
    } else {
      selectedCountryValue = '0';
    }

    if (props.country.value === selectedCountryValue) {
      fontColor='000';
      fillColor='D5A021';
    } else {
      fontColor='fff';
      fillColor=palette.darker.replace("#", "");
    }

    return 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2238%22%20height%3D' +
      '%2238%22%20viewBox%3D%220%200%2038%2038%22%3E%3Cpath%20fill%3D%22%23' + fillColor + '%22%20stroke%3D%22%23ccc%22%20' +
      'stroke-width%3D%22.5%22%20d%3D%22M34.305%2016.234c0%208.83-15.148%2019.158-15.148%2019.158S3.507%2025.065%203.507%' +
      '2016.1c0-8.505%206.894-14.304%2015.4-14.304%208.504%200%2015.398%205.933%2015.398%2014.438z%22%2F%3E%3Ctext%20' +
      'transform%3D%22translate%2819%2018.5%29%22%20fill%3D%22%23' + fontColor +'%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif' +
      '%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3E'
      + label +
      '%3C%2Ftext%3E%3C%2Fsvg%3E';
  }

  return (
    <Marker
      onClick={onMarkerClick}
      icon={getIcon(props.total)}
      {...props}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countryFilter.selectedCountry,
    date_from: state.dateSlider.date_from,
    date_to: state.dateSlider.date_to
  }
};

export default connect(mapStateToProps)(MovieMapMarker);