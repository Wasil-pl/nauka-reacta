const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHINPUT':
      return action.payload
    default:
      return statePart;
  }
}

export default searchStringReducer;