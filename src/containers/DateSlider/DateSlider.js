import React, {Component} from "react";
import Slider, { Rail, Handles, Tracks, Ticks } from 'react-compound-slider'
import Tick from './Tick'
import Track from './Track'
import Handle from './Handle'
import axios from 'axios'
import {GET_TEMPORAL_COVERAGE} from "../../config";
import {connect} from "react-redux";
import selectDates from "./actions/selectDates";
import selectRecords from "../Records/actions/selectRecords";
import {colors} from '../../config/colors';

const sliderStyle = {
  position: 'relative',
  width: '100%',
};

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 14,
  borderRadius: 7,
  cursor: 'pointer',
  backgroundColor: colors.sliderBackground,
};

const defaultValues = [1940, 2010];

class DateSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: [1915, 2015],
      values: defaultValues.slice(),
      reversed: false,
    };
  }

  onUpdate = update => {
    this.setState({ update });
  };

  onChange = values => {
    let date_from, date_to;
    [date_from, date_to] = values.slice();
    selectDates({
      date_from: date_from,
      date_to: date_to
    });

    const {selectedCountry, selectedKeyword} = this.props;
    let keywordParam, countryParam;

    if(selectedCountry) {
      countryParam = selectedCountry.hasOwnProperty('value') ? selectedCountry.value : '';
    } else {
      countryParam = '';
    }

    if(selectedKeyword) {
      keywordParam = selectedKeyword.hasOwnProperty('value') ? selectedKeyword.value : '';
    } else {
      keywordParam = '';
    }

    selectRecords({
      country: countryParam,
      keyword: keywordParam,
      date_from: this.props.date_from,
      date_to: this.props.date_to
    })
  };

  componentDidMount() {
    axios.get(GET_TEMPORAL_COVERAGE).then((response) => {
      this.setState({
        ...this.state,
        domain: [parseInt(response.data.earliest, 10), parseInt(response.data.latest, 10)],
        values: [parseInt(response.data.earliest, 10), parseInt(response.data.latest, 10)]
      })
    })
  }

  render() {
    const { state: { domain, values, reversed } } = this;

    return (
      <div style={{ height: 150, width: '90%', marginTop: '25px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Slider
          mode={2}
          step={1}
          domain={domain}
          reversed={reversed}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={10}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countryFilter.selectedCountry,
    selectedKeyword: state.keywordFilter.selectedKeyword,
    date_from: state.dateSlider.date_from,
    date_to: state.dateSlider.date_to
  }
};

export default connect(mapStateToProps)(DateSlider);