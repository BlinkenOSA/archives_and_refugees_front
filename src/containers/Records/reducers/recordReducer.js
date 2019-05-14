const initialState = {
  records: [],
  next: '',
  loading: false
};

function recordReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_RECORD':
      return {
        ...state,
        records: action.payload.results,
        next: action.payload.next
      };
    case 'ADD_RECORD':
      const newRecords = [...state.records, ...action.payload.results];
      return {
        ...state,
        records: newRecords,
        next: action.payload.next
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