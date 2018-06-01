import React, { Component } from "react";
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import axios from 'axios';
import {GET_KEYWORDS} from "../../config";
import selectKeyword from "./actions/selectKeyword";
import selectRecords from "../Records/actions/selectRecords";
import {connect} from "react-redux";
import selectCountry from "./actions/selectCountry";


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
    selectRecords({keyword: keyword})
  }

  render() {
    return(
      <Select
        options={this.state.keywords}
        placeholder={"Select Keyword..."}
        value={this.props.selectedKeyword}
        onChange={this.saveChanges}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedKeyword: state.keywordFilter.selectedKeyword }
};

export default connect(mapStateToProps)(KeywordFilter);