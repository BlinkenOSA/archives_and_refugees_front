import store from '../../../store/store'

function selectDates(value) {
  store.dispatch((dispatch) => {
      dispatch({
        type: 'SELECT_DATES',
        payload: {
          date_from: value.date_from,
          date_to: value.date_to
        }
      });
    }
  );
}

export default selectDates;