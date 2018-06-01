const initialState = {
  selectedKeyword: null
};

function keywordFilterReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_KEYWORD':
      return {
        ...state,
        selectedKeyword: action.payload
      };
    default:
      return {...state};
  }
}

export default keywordFilterReducer;