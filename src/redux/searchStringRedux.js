//selectors
export const getFavoriteCards = ({ cards }) => cards.filter(cards => cards.isFavorite === true);

//actions
export const updateSearchInput = payload => ({ type: UPDATE_SEARCHINPUT, payload });

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHINPUT = createActionName('UPDATE_SEARCHINPUT');

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHINPUT:
      return action.payload
    default:
      return statePart;
  }
}

export default searchStringReducer;