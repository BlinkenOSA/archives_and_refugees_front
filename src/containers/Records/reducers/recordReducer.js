const initialState = {
  records: []
};

function recordReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_RECORD':
      return {
        ...state,
        records: action.payload
      };
    default:
      return {...state};
  }
}

export default recordReducer;