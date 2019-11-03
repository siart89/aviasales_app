
function filterReducer(state = { activeFilter: 999, comfort: null }, action) {
  switch (action.type) {
  case 'CHECKBOX_FILTER':
    return {
      ...state,
      activeFilter: action.payload,
    };
  case 'BUTTON_FILTER':
    return { ...state, comfort: action.payload };
  default:
    return state;
  }
}

export default filterReducer;
