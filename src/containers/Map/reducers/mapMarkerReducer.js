const initialState = {
  markers: []
};

function mapMarkerReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MARKERS':
      return {
        ...state,
        markers: action.payload,
      };
    default:
      return {...state};
  }
}

export default mapMarkerReducer;