import store from '../../../store/store'

function selectMarkers(value) {
  store.dispatch((dispatch) => {
      dispatch({
        type: 'GET_MARKERS',
        payload: value
      });
    }
  );
}

export default selectMarkers;