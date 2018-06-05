import { combineReducers } from 'redux';
import countryFilterReducer from "../containers/Filters/reducers/countryFilterReducer";
import keywordFilterReducer from "../containers/Filters/reducers/keywordFilterReducer";
import recordReducer from "../containers/Records/reducers/recordReducer";
import dateFilterReducer from "../containers/DateSlider/reducers/dateFilterReducer";

export default combineReducers({
  countryFilter: countryFilterReducer,
  keywordFilter: keywordFilterReducer,
  recordsReducer: recordReducer,
  dateSlider: dateFilterReducer
});