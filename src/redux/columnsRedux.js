import shortid from "shortid";
import { strContains } from '../utils/strContains';

//selectors
export const getColumnsByList = ({ columns }, listId ) => columns.filter(column => column.listId === listId);
export const getFilteredCards = ({ cards, searchInput }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchInput));  /* id to parametr id z identyfikatorem kolumny. Staramy się wziąć więc ze state.cards (wszystkich kart) tylko te karty, których właściwość columnId jest zgodna właśnie z daną kolumną */

//actions
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default columnsReducer;