import React, { Component } from "react";
import Select from 'react-select'
import axios from 'axios';
import {GET_KEYWORDS} from "../../config";
import selectKeyword from "./actions/selectKeyword";
import selectRecords from "../Records/actions/selectRecords";
import {connect} from "react-redux";
import {selectStyles} from "../../config/colors";


class KeywordFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
    };

    this.saveChanges = this.saveChanges.bind(this)
  }

  componentDidMount() {
    axios.get(GET_KEYWORDS).then((response) => {
      this.setState({
        ...this.state,
        keywords: response.data.map((keyword) => {
          return {
            value: keyword.id,
            label: keyword.keyword
          }
        })
      });
    });
  }

  saveChanges(value) {
    let keyword;
    keyword = value ? value.value : null;
    selectKeyword(value);
    selectRecords({
      keyword: keyword,
      date_from: this.props.date_from,
      date_to: this.props.date_to
    })
  }

  render() {
    return(
      <Select
        options={this.state.keywords}
        placeholder={"Keyword..."}
        value={this.props.selectedKeyword}
        onChange={this.saveChanges}
        styles={selectStyles}
        isClearable={true}
        classNamePrefix="react-select"
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedKeyword: state.keywordFilter.selectedKeyword,
    date_from: state.dateSlider.date_from,
    date_to: state.dateSlider.date_to
  }
};

export default connect(mapStateToProps)(KeywordFilter);