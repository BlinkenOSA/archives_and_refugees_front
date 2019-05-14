import store from '../../../store/store'
import axios from "axios/index";

function addRecords(nextURL, parameters) {
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

  axios.get(nextURL, params).then((response) => {
    store.dispatch((dispatch) =>
      dispatch({
        type: 'ADD_RECORD',
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

export default addRecords;