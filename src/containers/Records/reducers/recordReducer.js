const initialState = {
  records: [],
  loading: false
};

function recordReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_RECORD':
      return {
        ...state,
        records: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return {...state};
  }
}

export default recordReducer;