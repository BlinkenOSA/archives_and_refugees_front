import store from '../../../store/store'

function selectCountry(value) {
  store.dispatch((dispatch) => {
      dispatch({
        type: 'SELECT_COUNTRY',
        payload: value
      });
      dispatch({
        type: 'SELECT_KEYWORD',
        payload: null
      });
    }
  );
}

export default selectCountry;