import store from '../../../store/store'
import {GET_MOVIES} from "../../../config";
import axios from "axios/index";

function selectRecords(parameters) {
  let params;
  params = {
    params: {
      ...parameters
    }
  };

  axios.get(GET_MOVIES, params).then((response) => {
    store.dispatch((dispatch) =>
      dispatch({
        type: 'SELECT_RECORD',
        payload: response.data
      })
    );
  })
}

export default selectRecords;