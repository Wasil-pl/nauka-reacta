import shortid from "shortid";
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchInput }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchInput));  /* id to parametr id z identyfikatorem kolumny. Staramy się wziąć więc ze state.cards (wszystkich kart) tylko te karty, których właściwość columnId jest zgodna właśnie z daną kolumną */
export const updateSearchInput = payload => ({ type: 'UPDATE_SEARCHINPUT', payload });

//actions
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');


const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}

export default cardsReducer;