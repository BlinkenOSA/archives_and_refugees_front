const initialState = {
  date_from: null,
  date_to: null
};

function dateFilterReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_DATES':
      return {
        ...state,
        date_from: action.payload.date_from,
        date_to: action.payload.date_to
      };
    default:
      return {...state};
  }
}

export default dateFilterReducer;