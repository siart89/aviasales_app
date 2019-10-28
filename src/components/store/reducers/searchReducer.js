
function searchReducer(state = [], action) {
  if (action.type === 'GET_DATA') {
    return [action.payload];
  } return state;
}

export default searchReducer;
