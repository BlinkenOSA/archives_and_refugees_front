import store from '../../../store/store'
import axios from "axios/index";
import {GET_MOVIES} from "../../../config";

function selectRecords(parameters) {
  let params;
  params = {
    params: {
      ...parameters
    }
  };

  store.dispatch((dispatch) => {
    dispatch({
      type: 'SET_LOADING',
      payload: true
    })
  });

  axios.get(GET_MOVIES, params).then((response) => {
    store.dispatch((dispatch) =>
      dispatch({
        type: 'SELECT_RECORD',
        payload: response.data
      })
    )
  }).then(() => {
    store.dispatch((dispatch) =>
        dispatch({
          type: 'SET_LOADING',
          payload: false
        })
    )
  })
}

export default selectRecords;