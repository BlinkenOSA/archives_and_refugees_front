const initialState = {
  selectedCountry: null
};

function countryFilterReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_COUNTRY':
      return {
        ...state,
        selectedCountry: action.payload
      };
    default:
      return {...state};
  }
}

export default countryFilterReducer;