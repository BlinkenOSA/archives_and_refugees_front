import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import mapStyle from "./MapStyle";
import {connect} from "react-redux";
import MovieMapMarker from "./MovieMapMarker";

const Map = withScriptjs(withGoogleMap((props) => {
  const zoom = props.selectedCountry ? 6 : 4;
  const latitude = props.selectedCountry ? props.selectedCountry.latitude : props.lat;
  const longitude = props.selectedCountry ? props.selectedCountry.longitude : props.long;

  return (
    <GoogleMap
      zoom={zoom}
      ref={(map) => map && map.panTo({lat: latitude,lng: longitude})}
      defaultOptions={{ styles: mapStyle }}
    >
      {props.markers.map(function(country){
        return <MovieMapMarker
          key={country.value}
          country={country}
          position={{ lat: country.latitude, lng: country.longitude }}
          total={country.total}
        />
      })}
    </GoogleMap>
  )
}));


const mapStateToProps = (state) => {
  return { selectedCountry: state.countryFilter.selectedCountry }
};

export default connect(mapStateToProps)(Map);