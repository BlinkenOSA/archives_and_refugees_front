import store from '../../../store/store'

function selectKeyword(value) {
  store.dispatch((dispatch) => {
    dispatch({
      type: 'SELECT_KEYWORD',
      payload: value
    });
    dispatch({
      type: 'SELECT_COUNTRY',
      payload: null
    })
  }

  );
}

export default selectKeyword;